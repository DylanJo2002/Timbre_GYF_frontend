import { createSlice } from '@reduxjs/toolkit'

const initialStateInputAgreements = {
    convenio_id: '',
    cashier_agency: 0,
    total_value: 0,
    reference: {
      filter: false,
      value: ""
    }
  }
  
const initialStateAgreements = {
    agreements : []
}

export const inputAgreementsSlice = createSlice({
    name: 'input_agreements',
    initialState: initialStateInputAgreements,
    reducers: {
      inpunt_changed_agreement_name: (state, {payload: {convenio_id}}) => {
        state.convenio_id = convenio_id;
        return state;
      },
      inpunt_changed_cashier_agency: (state, {payload: {cashier_agency}}) => {
        state.cashier_agency = cashier_agency;
        return state;
      },
      inpunt_changed_total_value: (state, {payload: {total_value}}) => {
        state.total_value = total_value;
        return state;
      },
      inpunt_changed_reference: (state, {payload: {reference: {filter,value}}}) => {
        if(typeof filter ==! 'undefined') {
          state.reference.filter = filter;
        }else if(typeof value ==! 'undefined') {
          state.reference.value = value;

        }
        return state;
      },
      clear_inputs_agreement: (state) => {
        state.convenio_id = null;
        state.cashier_agency = null;
        state.total_value = null;
        state.reference = null;
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

export const {inpunt_changed_agreement_name,inpunt_changed_cashier_agency
  ,inpunt_changed_total_value,inpunt_changed_reference,clear_inputs_agreement} = inputAgreementsSlice.actions;
export const {retrieve_agreements} = agreementSlice.actions;

