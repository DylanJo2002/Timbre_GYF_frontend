import { createSlice } from '@reduxjs/toolkit'

import {sessionInfo, decodeSession} from '../../utils';

const initialStateSession = {
    value: sessionInfo(),
    decoded: decodeSession()
}

const initialStateInputLogin = {
  user: '',
  password: ''
}

export const sessionSlicer = createSlice({
    name: 'session',
    initialState: initialStateSession,
    reducers: {
      login: (state) => {
        state.value = sessionInfo();
        state.decoded = decodeSession();
      },
      logout: (state) => {
        state.value = null;
        state.decoded = null;
      },
    }
  });

  export const inputUserLoginSlice = createSlice({
    name: 'user_login',
    initialState: initialStateInputLogin,
    reducers: {
      inpunt_change: (state, {payload: {user,password}}) => {
        if(user) {
          state.user = user;
        }else {
          if(password) {
            state.password = password;
          }
        }
        return state;
      },
      clear_inputs: (state) => {
        state.password = null;
        state.user = null;
        return state;
      }
    }
  });

  // Action creators are generated for each case reducer function
  export const { login, logout} = sessionSlicer.actions;
  export const {inpunt_change,clear_inputs} = inputUserLoginSlice.actions;

