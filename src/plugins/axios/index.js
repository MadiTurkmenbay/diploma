import axios from 'axios'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();


const instance = axios.create({
    baseURL: 'http://52.72.95.158:8080/api/v1/',
});

const currentToken = cookies.get('token');
instance.interceptors.request.use(
    (config) => {
        if (config.authorization !== false) {
            const token = currentToken;
            if (token) {
                config.headers.Authorization = "Bearer " + token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// if(cookies.get('token')) {
    // instance.defaults.headers.common['Authorization'] = 'Bearer ' + ;
// }
export default instance;