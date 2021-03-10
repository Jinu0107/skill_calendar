const { Router } = require('express');
const { pool } = require('../DB/DB');
const { checkToken } = require('../token/token');

const router = Router();

/* reservation process */
router.post('/reservation', async (req, res) => {
    const token_data = await checkToken(req);
    const { date } = req.body;
    const date_arr = date.split("-");
    if (!token_data.success) {
        res.json({
            success: false,
            message: "로그인한 유저만 이용할 수 있습니다."
        });
        return;
    }

    if (new Date(date) < new Date()) {
        res.json({
            success: false,
            message: "지난 날짜는 예약할 수 없습니다."
        });
        return;
    }

    const { user_id } = token_data.info;
    const find_user = await pool.query("SELECT * FROM skill_users WHERE user_id = ?", [user_id]);
    const result = await pool.query("SELECT COUNT(*) as count FROM skill_reservation WHERE user_id = ? AND date LIKE ?", [user_id, `${date_arr[0]}-${date_arr[1]}%`]);
    const count = result[0][0].count;

    if (count >= find_user[0][0].user_max_count) {
        res.json({
            success: false,
            message: `${date_arr[0]}년도 ${date_arr[1]}월 휴가를 모두 사용하였습니다.`
        });
        return
    }

    await pool.query("INSERT INTO `skill_reservation`(`idx`, `user_id`, `date`, `info`) VALUES (? , ? , ? , ?)", [null, user_id, date, '그냥그냥 씁니다~~']);
    res.json({
        success: true,
        message: "성공적으로 등록되었습니다."
    })

});

router.get("/load", async (req, res) => {
    let result = await pool.query("SELECT r.* , u.user_name FROM skill_reservation r , skill_users u WHERE r.user_id = u.user_id;");
    res.json(result[0]);
});


module.exports = router
