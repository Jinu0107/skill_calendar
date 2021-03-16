export default ({ url, $axios, store }) => ({
    async register(model) {
        let result = await $axios.post(url.register, model);
        return result;
    },
    async login(model) {
        let result = await $axios.post(url.login, model);
        return result;
    },
    async reservation(model) {
        let result = await $axios.post(url.reservation, model);
        return result;
    },

    async getReservationList(model) {
        let result = await $axios.get(url.get_reservation_list + "/" + model.date);
        return result;
    },
    async getRegistList() {
        let result = await $axios.get(url.regist_list);
        return result;
    },
    async usetSuccess(model) {
        let result = await $axios.post(url.user_success, model);
        return result;
    },
    async userReturn(model) {
        let result = await $axios.post(url.user_return, model);
        return result;
    },
    async getUserList() {
        let result = await $axios.get(url.user_list);
        return result;
    },
    async changeClass(model) {
        let result = await $axios.post(url.change_class, model);
        return result;
    },
    HOST: url.HOST
});