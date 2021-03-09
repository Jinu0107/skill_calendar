export default ({ url, $axios, store }) => ({
    async register(model) {
        let result = await $axios.post(url.register, model);
        return result;
    },
    async login(model) {
        let result = await $axios.post(url.login, model, { withCredentials: true });
        return result;
    },
    HOST: url.HOST
}); 