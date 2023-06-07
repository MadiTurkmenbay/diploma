import { createStore } from 'vuex'
import { useCookies } from "vue3-cookies";
// @ts-ignore
import axios from '@/plugins/axios'


const {cookies} = useCookies();

const store = createStore({
    state: {
        isAuth: !!cookies.get('user'),
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
            state.isAuth = true;
        },
        removeToken(state) {
            state.token = '';
            cookies.remove('token')
        },
        removeUser(state) {
            state.user = '';
            cookies.remove('user')
            state.isAuth = false;
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
            // const { data } = await axios.post('auth/token', form);
            let data = {
                firstName: "Ерасыл",
                lastName: "Кырыкбай",
                email: form.username+"@gmail.com",
                login: form.username,
                phone: "87654349838",
                dateOfBirth: "2003-06-04T02:31:36",
                address: "Алматы",
                roles: [
                    {
                        id: 1,
                        name: "ROLE_STUDENT"
                    }
                ],
                group: {
                    id: 1,
                    groupName: "IT-1901",
                    curatorId: 1,
                    headman: null,
                    headmanDTO: {
                        firstName: "Ерасыл",
                        lastName: "Кырыкбай",
                        email: "kantoreuly02@gmail.com",
                        login: "erasyl",
                        phone: "876543",
                        dateOfBirth: "2003-06-04",
                        address: "Алматы",
                        roles: [
                            {
                                id: 1,
                                name: "ROLE_STUDENT"
                            }
                        ],
                        group: null,
                        degree: null
                    },
                    departmentId: null
                },
                degree: 'Бакалавр студенті'
            }
            if (form.username == 'teacher' && form.password == 'teacher') {
                data.roles[0].name = 'ROLE_TEACHER';
                data.firstName = 'Салтанат';
                data.lastName = 'Нарбаева';
                data.dateOfBirth = '1993-06-04';
                data.phone = '87654349828';
                // @ts-ignore
                data.group = null;
                data.degree = 'Оқытушы';
            }

            // state.commit('saveToken', {token: data})

            // const result = await axios.get(`students`);

            state.commit('setUser', data);
        },
        async logout(state) {
            state.commit('removeToken')
            state.commit('removeUser')
        },
    },
})


export default store;