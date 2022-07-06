import { createSlice } from '@reduxjs/toolkit'

const initialStateTransactions = {
  receipt_transactions : [],
  loading: false
}


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

export const {update_transactions,update_transactions_loading} = transactionsSlice.actions;
