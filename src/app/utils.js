import {retrieveApiEnv, endpoints}  from './api/api'
const sessionToken = localStorage.getItem('timbre_gyf_token');

export const sessionInfo = ()=> {
    console.log(sessionToken);
    return sessionToken ? sessionToken : null;

}

export const invalidToken = ()=> {
    localStorage.setItem('timbre_gyf_token',null);
    alert("SU SESIÓN HA CADUCADO. POR FAVOR, INICIE SESIÓN DE NUEVO.");
}

export const formatDate = (date) => {
    const date_divided = date.split('T')[0];
    return date_divided;
}

export const formatTime = (time) => {
    const time_divided = time.split('T')[1].substring(0,8);
    return time_divided;
}
