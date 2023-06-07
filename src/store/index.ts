import { createStore } from 'vuex'
import { useCookies } from "vue3-cookies";
// @ts-ignore
import axios from '@/plugins/axios'


const {cookies} = useCookies();

const store = createStore({
    state: {
        isAuth: !cookies.get('user'),
        user: cookies.get('user'),
        count: 0,
        token: cookies.get('token')
    },
    mutations: {
        saveToken(state, { token, remember }) {
            state.token = token
            cookies.set('token', token, remember ? 365 : undefined)
        },
        setUser(state, user) {
            state.user = user;
            cookies.set('user', user);
        },
        removeToken(state) {
            state.token = '';
            cookies.remove('token')
        },
        removeUser(state) {
            state.user = '';
            cookies.remove('user')
        },
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        async login(state, form) {
            const { data } = await axios.post('auth/token', form);

            state.commit('saveToken', {token: data})

            const result = await axios.get(`students`);

            state.commit('setUser', result?.data);
        },
        async logout(state) {
            state.commit('removeToken')
            state.commit('removeUser')
        },
    },
})


export default store;