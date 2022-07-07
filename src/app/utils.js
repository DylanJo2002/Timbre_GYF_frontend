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
    localStorage.setItem('timbre_gyf_token',null);
}

export const formatDate = (date)=>{
    const month = date.getMonth().length >=10 ? date.getMonth() : "0"+date.getMonth();
    const day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    return `${date.getFullYear()}/${month}/${day}`
}

export const formatTime= (date)=>{
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
