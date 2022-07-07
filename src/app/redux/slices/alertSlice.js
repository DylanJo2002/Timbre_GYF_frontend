import { createSlice } from "@reduxjs/toolkit";

const intialAlertState = {
    show: false,
    severity: null,
    title: null,
    message: null
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: intialAlertState,
    reducers: {
      doAlert: (state, {payload: {show,severity,title,message}}) => {
        state.show = show;
        state.severity = severity;
        state.title = title;
        state.message = message;
        return state;
      },
      removeAlert: (state) => {
        state.show = false;
      }
    }
});

export const {doAlert, removeAlert} = alertSlice.actions; 