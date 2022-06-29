/*
    SESSION ACTIONS
*/

const loginAction = {type: "session/login"};
const logoutAction = {type: "session/logout"};

export const getLoginAction = ()=>{return loginAction};
export const getLogouAction = ()=>{return logoutAction};