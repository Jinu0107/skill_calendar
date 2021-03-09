export default async ({ store, redirect, route }) => {
    let { path } = route;
    const UNSIGNED_USER_ALLOW_PATH = ["/login", "/register"];
    const SIGNED_USER_ALLOW_PATH = [];

    if (!store.state.auth.token || store.state.auth.token == "undefined") {
        if (typeof localStorage === "undefined") {
            return redirect("/");
        }
        store.commit("auth/login", localStorage.token);
    }

    const URL = "http://localhost:3000/api/user/access_check";
    store.$axios.defaults.headers.common['Authorization'] = store.state.auth.token;
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    let { data } = await store.$axios.post(URL, { headers });


    if (data.success) {
        let parmas = {
            name: data.info.user_name,
            level: data.info.user_level * 1,
            img: data.info.user_img,
        }
        store.commit("auth/setState", parmas);
    } else {
        store.commit("auth/logout");
    }



    let SIGN = !(store.state.auth.token === "undefined" || !store.state.auth.token);

    if (UNSIGNED_USER_ALLOW_PATH.includes(path) && SIGN) {
        alert("로그인하지 않은 유저만 출입 가능합니다.");
        return redirect('/');
    }

    if (SIGNED_USER_ALLOW_PATH.includes(path) && store.state.auth.level !== 99) {
        alert("관리자만 출입 가능합니다.");
        return redirect('/');
    }

}