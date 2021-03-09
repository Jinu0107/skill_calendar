const { Router } = require('express');
const { pool } = require('../DB/DB');

const router = Router();

/* register process */
router.post('/register', async (req, res) => {
  const { id, password, name } = req.body;
  const find_user = await pool.query("SELECT * FROM skill_users WHERE user_id = ?", [id]);
  if (find_user[0].length === 1) {
    res.json({ msg: '중복되는 회원이 있습니다.', success: false });
  } else {
    const insert_sql = "INSERT INTO `skill_users`(`user_id`, `user_name`, `user_password`, `user_level`, `user_img`, `user_count`) VALUES (? , ? , PASSWORD(?) , ? , ? , ?)";
    const query_arr = [id, name, password, 0, "", 0];
    await pool.query(insert_sql, query_arr);
    res.json({ msg: '성공적으로 회원가입 되었습니다.', success: true });
  }
});

/* login process */
router.post("/login", async (req, res) => {
  const { id, password } = req.body;
  const find_user = await pool.query("SELECT * FROM skill_users WHERE user_id = ? AND user_password = PASSWORD(?)", [id, password]);
  if (find_user[0].length === 1) {
    res.json({ msg: '성공적으로 로그인 되었습니다.', success: true });
    req.session.user = "로그인 잇습니다.";
  } else {
    res.json({ msg: '아이디 또는 비밀번호가 잘못 되었습니다.', success: false });
  }
});

router.get("/session_test", (req, res) => {
  res.json(req.session);
});


module.exports = router
