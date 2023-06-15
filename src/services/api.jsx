import axios from "axios";


function login(data){
    return axios.post(`${import.meta.env.VITE_APP_API_URL}/signin`, data);
}
function signUp(data){
    return axios.post(`${import.meta.env.VITE_APP_API_URL}/signup`, data);
}
const api = {
    login,
    signUp
}
export default api;