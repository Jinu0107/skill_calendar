export default ({ url, $axios, store }) => ({

    async register(model) {
        let result = $axios.post(url.register, model);
        console.log(result);
    },
    HOST: url.HOST
}); 