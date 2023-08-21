import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL;

function authHeaders(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
}

function login(data) {
    return axios.post(`${apiURL}/signin`, data);
}

function signUp(data) {
    return axios.post(`${apiURL}/signup`, data);
}

function listGroups(token) {
    const header = authHeaders(token);

    return axios.get(`${apiURL}/groups`, header);
}

function myGroups(token) {
    const header = authHeaders(token);

    return axios.get(`${apiURL}/groups/my-groups`, header);
}

function getRanking(token) {
    const header = authHeaders(token);
    return axios.get(`${apiURL}/ranking`, header);
}

function getMatches(token){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/games`, header);

}

function getLastGames(token){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/games/last-games`, header);
}

function getRankingByGroup(token, id){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/groups/ranking/${id}`, header);
}

function postGuess(token, data){
    const header = authHeaders(token);
    return axios.post(`${apiURL}/guess`, data, header);    
}

function getMyGuesses(token, id){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/guess/${id}`, header);
}

function postGroup(token, name){
    const header = authHeaders(token);
    return axios.post(`${apiURL}/groups`, name, header);
}

function getAllGroups(token){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/groups`, header);
}

function getMemberGroupRelation (token, id){
    const header = authHeaders(token);
    return axios.get(`${apiURL}/groups/member-group/${id}`, header);
}

function postJoinGroup(token, id){
    const header = authHeaders(token);
    return axios.post(`${apiURL}/groups/join`, id, header);
}


const api = {
    login,
    signUp,
    listGroups,
    myGroups,
    getRanking,
    getMatches,
    getLastGames,
    getRankingByGroup,
    postGuess,
    getMyGuesses,
    postGroup,
    getAllGroups,
    getMemberGroupRelation,
    postJoinGroup

}
export default api;