import { configureStore } from '@reduxjs/toolkit'
import {sessionSlicer, inputUserLoginSlice, agreementSlice, inputAgreementsSlice, transactionsSlice} from './slices/sessionSlice'
const store  = configureStore(
    {
        reducer: {
            session: sessionSlicer.reducer,
            input_user_login: inputUserLoginSlice.reducer,
            agreements: agreementSlice.reducer,
            agreement: inputAgreementsSlice.reducer,
            transactions: transactionsSlice.reducer
        }
    }
);

export default store;