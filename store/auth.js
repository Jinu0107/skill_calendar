export const state = () => ({
    token: null,
    name : '',
    img : '',
    level: 0,
});

export const mutations = {

    login(state, token) {
        state.token = token;
        state.level = state.level;
        state.name = state.name;
        state.img = state.img;

        localStorage.token = token;
    },

    logout(state) {
        state.token = null;
        state.level = 0;

        delete localStorage.token;
        this.$axios.defaults.headers.common['Authorization'] = state.token;
    },

    setState(state, params) {
        state.level = params.level * 1;
        state.name = params.name;
        state.img = params.img;
    }
}

