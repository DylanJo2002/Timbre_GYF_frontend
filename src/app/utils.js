import jwt_decode from "jwt-decode";

export const sessionInfo = ()=> {
    const sessionToken = localStorage.getItem('timbre_gyf_token');

    return sessionToken ? sessionToken : null;

}

export const decodeSession = () => {
    const sessionToken = localStorage.getItem('timbre_gyf_token');
    return sessionToken ?
        jwt_decode(sessionToken)
        :
        null;
}

export const invalidToken = ()=> {
    localStorage.removeItem('timbre_gyf_token');
}

export const formatDate = (date)=>{
    const month = date.getMonth().length >=10 ? date.getMonth() : "0"+date.getMonth();
    const day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    return `${date.getFullYear()}/${month}/${day}`
}

export const formatTime= (date)=>{
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export const formatDateToTable = (date) => {
    const date_divided = date.split('T')[0];
    return date_divided;
}

export const formatTimeToTable = (time) => {
    const time_divided = time.split('T')[1].substring(0,8);
    return time_divided;
}