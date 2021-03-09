const { Router } = require('express');
const { pool } = require('../DB/DB');
const { session_secret } = require('../DB/Credential');
const jwt = require('jsonwebtoken');
const options = {
  algorithm: "HS256", // 해싱 알고리즘
  expiresIn: "30m",  // 토큰 유효 기간
  issuer: "issuer" // 발행자
}

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
  const find_user = await pool.query("SELECT * FROM skill_users WHERE user_id = ? AND user_password = PASSWORD(?) AND user_level != 0", [id, password]);
  if (find_user[0].length === 1) {
    const user_obj = {
      user_id: find_user[0][0].user_id,
      user_name: find_user[0][0].user_name,
      user_level: find_user[0][0].user_level
    };
    const token = jwt.sign(user_obj, session_secret, options);
    res.json({ msg: '성공적으로 로그인 되었습니다.', success: true, token: token });
  } else {
    res.json({ msg: '아이디 또는 비밀번호가 잘못 되었습니다.', success: false });
  }
});

/* token check */
router.post("/access_check", (req, res) => {
  const token = req.header("Authorization");
  try {
    const decode_token = jwt.verify(token, session_secret);
    res.json({ user_level: decode_token.user_level, success: true });
  } catch (error) {
    res.json({ user_level: 0, success: false });
  }
});


module.exports = router
