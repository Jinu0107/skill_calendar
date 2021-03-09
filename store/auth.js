import { Cookie } from "cookie";

export const state = () => ({
    token: null,
    level: 0,
});

export const mutations = {

    login(state, token) {
        // console.log(state , token);
        state.token = token;
        state.level = state.level;
        localStorage.token = token;
    },

    logout(state) {
        state.token = null;
        state.level = 0;
        delete localStorage.token;
        this.$axios.defaults.headers.common['Authorization'] = state.token;
    },

    checkToken(state, level) {
        state.level = level * 1;
    }
}

