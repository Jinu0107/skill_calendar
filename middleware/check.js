export default async ({ store, redirect, route }) => {
    let { path } = route;
    const UNSIGNED_USER_ALLOW_PATH = ["/login", "/register"];
    const SIGNED_USER_ALLOW_PATH = [];

    if (!store.state.auth.token || store.state.auth.token == "undefined") {
        // store.commit('auth/login', localStorage.token);
    }

    const URL = "http://localhost:3000/api/user/access_check";
    // console.log(store.state.auth , "이거는 check.js에서 나옵니다");
    store.$axios.defaults.headers.common['Authorization'] = store.state.auth.token;
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    let { data } = await store.$axios.post(URL, { headers });

    // let param = {
    //     level: data.level ? data.level : 0,
    //     confirm_password: data.confirm_password
    // }
    // store.commit("auth/checkToken", param);

    // let SIGN = !(store.state.auth.token === "undefined" || !store.state.auth.token);

    // if (UNSIGNED_USER_ALLOW_PATH.includes(path) && SIGN) {
    //     alert("로그인하지 않은 유저만 출입 가능합니다.");
    //     return redirect('/');
    // }

    // if (SIGNED_USER_ALLOW_PATH.includes(path) && store.state.auth.level !== 99) {
    //     console.log(store.state.auth.level);
    //     alert("관리자만 출입 가능합니다.");
    //     return redirect('/');
    // }




    // console.log( store.dispatch("getTokenData") );
    // console.log( store.state.auth.level );

    // return redirect('/')
}