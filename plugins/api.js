import Vue from 'vue'
import auth from './api/auth'

export default function ({ $axios, store }) {
    
    const HOST = '';

    const url = {
        HOST,
        register: `${HOST}/api/user/register`,
        login : `${HOST}/api/user/login`,
        reservation : `${HOST}/api/calendar/reservation`,
        get_reservation_list : `${HOST}/api/calendar/load`,
        regist_list : `${HOST}/api/user/regist-list`,
        user_success : `${HOST}/api/user/success`,
        user_return : `${HOST}/api/user/return`,
    }

    const option = {
        url, $axios, store
    }

    const ctx = {
        auth: auth(option)
    }

    Vue.prototype.$api = ctx;
}