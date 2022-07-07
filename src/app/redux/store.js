import { configureStore } from '@reduxjs/toolkit'
import {sessionSlicer, inputUserLoginSlice} from './slices/sessionSlice'
import {agreementSlice, inputAgreementsSlice} from './slices/agreementSlice'
import {transactionsSlice} from './slices/transactionSlice'
import { alertSlice } from './slices/alertSlice'
const store  = configureStore(
    {
        reducer: {
            session: sessionSlicer.reducer,
            input_user_login: inputUserLoginSlice.reducer,
            agreements: agreementSlice.reducer,
            agreement: inputAgreementsSlice.reducer,
            transactions: transactionsSlice.reducer,
            alert: alertSlice.reducer
        }
    }
);

export default store;