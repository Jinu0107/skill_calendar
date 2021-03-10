const { session_secret } = require('../DB/Credential');
const jwt = require('jsonwebtoken');

module.exports.checkToken = async function (req) {
    const token = req.header("Authorization");
    // token does not exist
    if (token == "undefined") {
        return {
            success: false,
            user_level: 0,
            message: '비로그인'
        }
    }

    return await jwt.verify(token, session_secret, (err, d_token) => {
        if (err) {
            return {
                success: false,
                user_level: 0,
                message: err.message
            }
        } else {
            return {
                success: true,
                user_level: d_token.user_level,
                info: d_token
            }
        }
    });
}

module.exports.options = {
    algorithm: "HS256", // 해싱 알고리즘
    expiresIn: "30m",  // 토큰 유효 기간
    issuer: "issuer" // 발행자
}