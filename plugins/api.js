import Vue from 'vue'
import auth from './api/auth'

export default function ({ $axios, store }) {
    
    const HOST = '';

    const url = {
        HOST,
        register: `${HOST}/api/user/register`,
    }

    const option = {
        url, $axios, store
    }

    const ctx = {
        auth: auth(option)
    }

    Vue.prototype.$api = ctx;
}