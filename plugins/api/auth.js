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

    async getReservationList() {
        let result = await $axios.get(url.get_reservation_list);
        return result;
    },
    HOST: url.HOST
});