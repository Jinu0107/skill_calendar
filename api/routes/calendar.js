const { Router } = require('express');
const { pool } = require('../DB/DB');
const { checkToken } = require('../token/token');

const router = Router();

/* reservation process */
router.post('/reservation', async (req, res) => {
    const token_data = await checkToken(req);
    const { date } = req.body;
    // date : 2020-1-7
    const date_arr = date.split("-");
    if (!token_data.success) {
        res.json({
            success: false,
            message: "로그인한 유저만 이용할 수 있습니다."
        });
        return;
    }

    if (new Date(date) < new Date().normalization()) {
        res.json({
            success: false,
            message: "지난 날짜는 예약할 수 없습니다."
        });
        return;
    }
    const { user_id } = token_data.info;

    const find_date = await pool.query("SELECT * FROM skill_schedule WHERE user_id = ? AND date = ?", [user_id, date]);
    if (find_date[0].length != 0) {
        res.json({
            success: false,
            message: `같은 날짜에 휴가를 사용할 수 없습니다.`
        });
        return;
    }

    const find_user = await pool.query("SELECT * FROM skill_users WHERE user_id = ?", [user_id]);
    const result = await pool.query("SELECT COUNT(*) as count FROM skill_schedule WHERE user_id = ? AND date LIKE ?", [user_id, `${date_arr[0]}-${date_arr[1]}%`]);
    const count = result[0][0].count;

    if (count >= find_user[0][0].user_max_count) {
        res.json({
            success: false,
            message: `${date_arr[0]}년도 ${date_arr[1]}월 휴가를 모두 사용하였습니다.`
        });
        return
    }

    await pool.query("INSERT INTO `skill_schedule`(`idx`, `user_id`, `date`, `info` , `level`) VALUES (? , ? , ? , ? , 0)", [null, user_id, date, '그냥그냥 씁니다~~']);
    res.json({
        success: true,
        message: "성공적으로 등록되었습니다."
    })

});

// 특정 년-월 의 일정 불러오기
router.get("/load/:date", async (req, res) => {
    const date = req.params.date;
    //date : 2020-12
    let result = await pool.query("SELECT r.* , u.user_name FROM skill_schedule r , skill_users u WHERE r.user_id = u.user_id AND r.date LIKE ?", [`${date}%`]);
    res.json(result[0]);
});

// 요청된 휴가 목록 불러오기
router.get("/reservation-request-list", async (req, res) => {
    let result = await pool.query("SELECT s.* , u.user_name FROM skill_schedule s , skill_users u WHERE level = 0 AND u.user_id = s.user_id");
    res.json(result[0]);
});

// 휴가 승인하기
router.post("/reservation-success", async (req, res) => {
    let token = await checkToken(req);
    if (!token.success || token.user_level != 99) {
        res.json({ msg: '관리자만 이용할 수 있습니다.', success: false });
        return;
    }
    const { idx } = req.body;

    pool.query("UPDATE skill_schedule SET level = 1 WHERE idx = ?", [idx]);
    res.json({ msg: '성공적으로 승인되었습니다.', success: true });
});

// 휴가 거절하기
router.post("/reservation-return", async (req, res) => {
    let token = await checkToken(req);
    if (!token.success || token.user_level != 99) {
        res.json({ msg: '관리자만 이용할 수 있습니다.', success: false });
        return;
    }

    const { idx } = req.body;


    pool.query("DELETE FROM skill_schedule WHERE idx = ?", [idx]);
    res.json({ msg: '성공적으로 거절되었습니다.', success: true });

});

// 모든 일정 목록 불러오기
router.get("/schedule-list", async (req, res) => {
    let result = await pool.query("SELECT s.* , u.user_name FROM skill_schedule s , skill_users u WHERE level != 0 AND u.user_id = s.user_id ORDER BY date");
    res.json(result[0]);
});


// 관리자 일정 등록
router.post("/schedule-register", async (req, res) => {
    let token = await checkToken(req);
    if (!token.success || token.user_level != 99) {
        res.json({ msg: '관리자만 이용할 수 있습니다.', success: false });
        return;
    }

    const { date, info } = req.body;
    let sql = "INSERT INTO `skill_schedule`(`idx`, `user_id`, `date`, `info`, `level`) VALUES (?,?,?,?,?)";
    let datas = [
        null,
        'admin',
        date,
        info,
        2
    ];
    pool.query(sql, datas);
    res.json({ msg: '성공적으로 등록되었습니다.', success: true });
});



module.exports = router
