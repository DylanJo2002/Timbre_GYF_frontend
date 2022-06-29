import { createSlice } from '@reduxjs/toolkit'

import {sessionInfo} from '../../utils';

const initialStateSession = {
    value: sessionInfo()
}

const initialStateInputLogin = {
  user: '',
  password: ''
}

const initialStateInputAgreements = {
  convenio_id: '',
  trx_limit: 1
}

const initialStateAgreements = {
  agreements : []
}

const initialStateTransactions = {
  receipt_transactions : [],
  loading: false
}


export const sessionSlicer = createSlice({
    name: 'session',
    initialState: initialStateSession,
    reducers: {
      login: (state) => {
        state.value = true;
      },
      logout: (state) => {
        state.value = false;
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

  export const inputAgreementsSlice = createSlice({
    name: 'input_agreements',
    initialState: initialStateInputAgreements,
    reducers: {
      inpunt_changed_agreement_name: (state, {payload: {convenio_id}}) => {
        state.convenio_id = convenio_id;
        return state;
      },
      inpunt_changed_agreement_limit: (state, {payload: {trx_limit}}) => {
        state.trx_limit = trx_limit;
        return state;
      },
      clear_inputs_agreement: (state) => {
        state.convenio_id = null;
        state.trx_limit = null;
        return state;
      }
    }
  });

  export const agreementSlice = createSlice({
    name: 'agreements',
    initialState: initialStateAgreements,
    reducers: {
      retrieve_agreements: (state, {payload: {agreements}}) => {
        state.agreements = agreements;
        return state;
      }
    }
  });
  
  export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialStateTransactions,
    reducers: {
      update_transactions: (state, {payload: {receipt_transactions}}) => {
        state.receipt_transactions = receipt_transactions;
        return state;
      },
      update_transactions_loading: (state, {payload: {loading}}) => {
        state.loading = loading;
        return state;
      }
    }
  });

  // Action creators are generated for each case reducer function
  export const { login, logout} = sessionSlicer.actions;
  export const {inpunt_change,clear_inputs} = inputUserLoginSlice.actions;
  export const {inpunt_changed_agreement_name,clear_inputs_agreement,inpunt_changed_agreement_limit} = inputAgreementsSlice.actions;
  export const {retrieve_agreements} = agreementSlice.actions;
  export const {update_transactions,update_transactions_loading} = transactionsSlice.actions;


