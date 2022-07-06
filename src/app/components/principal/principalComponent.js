import './principalComponent.css';
import { connect } from "react-redux/es/exports";
import {logout} from '../../redux/slices/sessionSlice'
import {inpunt_changed_agreement_name,inpunt_changed_cashier_agency
    ,inpunt_changed_total_value,inpunt_changed_reference,clear_inputs_agreement,retrieve_agreements} from '../../redux/slices/agreementSlice'
import {update_transactions,update_transactions_loading} from '../../redux/slices/transactionSlice'
import { useEffect } from 'react';
import {doGetAgreementsRequest, doGetTransactionsRequest} from '../../api/requests'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import SelectSearch from 'react-select';
import {invalidToken} from '../../utils'
import ReactLoading from 'react-loading';
import TransactionTableComponent from '../transaction_table/transactionTableComponent'


async function onConsultButton(ev, {convenio_id,trx_limit},dispath){
    ev.preventDefault();
    dispath(update_transactions_loading({loading: true}))
    doGetTransactionsRequest(convenio_id,trx_limit)
    .then(data => {
        if(data) {
            dispath(update_transactions({receipt_transactions: data.receipt_transactions}));
            dispath(update_transactions_loading({loading: false}))
            return;
        }
        invalidToken();
        dispath(logout());
    })
}

function onLoadComponent(dispath){
    doGetAgreementsRequest().then(
        data => {
            if(data) {
                dispath(retrieve_agreements(data))
                return; 
            }
            invalidToken();
            dispath(logout());
        }
    );
}

function PrincipalComponent(props) {

    useEffect ( ()=> {onLoadComponent(dispath)}, []);
    const dispath = useDispatch();
    const agreements = useSelector(state => state.agreements.agreements);
    const agreement = useSelector(state => state.agreement);
    const loading = useSelector(state => state.transactions.loading);
    const transactions = useSelector(state => state.transactions.receipt_transactions);

    const options = agreements.map(agreements => {return {label: agreements.agreement_name, value: agreements.code_agreement}});
    
    return (
        <>
            <div className='mt-3'>
                <form onSubmit={ev => onConsultButton(ev,agreement,dispath)}>
                        <div className="d-flex flex-column align-items-center container-form-principal mx-auto">
                                <div className="row m-0 p-0 w-100">
                                        <div className='col-12 row m-0 p-0 text-center'>
                                            <label htmlFor="select-convenio">Seleccione un convenio</label>
                                        </div>

                                        <div className="col-12 m-0 p-0 text-center mb-4">
                                            <SelectSearch options={options} name="select-convenio" placeholder="Elige el convenio" 
                                            onChange={ev => props.imput_change({convenio_id: ev.value})}/>

                                        </div>
                                    
                                        <div className="col-12 m-0 p-0 d-flex gap-3">
                                            <div>
                                                <label htmlFor="input-limite">Agencia</label>
                                                <input name="input-limite" type="number" required defaultValue={1}
                                                onChange={ev => props.imput_change({cashier_agency: ev.target.value})}/>
                                            </div>
                                            <div>
                                                <label htmlFor="input-limite">Valor total</label>
                                                <input name="input-limite" type="number" required defaultValue={1}
                                                onChange={ev => props.imput_change({total_value: ev.target.value})}/>
                                            </div>
                                            <div>
                                                <div className='d-flex justify-content-around'>
                                                    <label htmlFor="check_referencia">Referencia</label>
                                                    <input type="checkbox" name="check_referencia"
                                                    onChange={ev => props.imput_change({reference: {filter: ev.target.value}})}/>
                                                </div>
                                                <input name="input-limite" type="text" required defaultValue={1}
                                                onChange={ev => props.imput_change({reference: {value: ev.target.value}})}/>
                                            </div>
                                        </div>
                                </div>
                                <div className="mt-3">
                                    <button className="btn" onChange={ev => onConsultButton(ev,agreement,dispath)}>CONSULTAR</button>
                                </div>
                        </div>
                </form>

                {loading ? 
                <ReactLoading type="spin" color="#00a9ce" height={'5%'} width={'5%'} className="mx-auto mt-3"/> : 
                <TransactionTableComponent transactions={transactions} ></TransactionTableComponent>}
                

            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        imput_change: (payload) => {
            if(typeof payload.convenio_id != 'undefined'){
                dispatch(inpunt_changed_agreement_name(payload))
            }else if(typeof payload.cashier_agency != 'undefined') {
                dispatch(inpunt_changed_cashier_agency(payload));
            }else if(typeof payload.total_value != 'undefined') {
                dispatch(inpunt_changed_total_value(payload));
            }else if(typeof payload.reference != 'undefined') {
                dispatch(inpunt_changed_reference(payload));
            }
    },
      retrieve_agreements: (payload) => dispatch(retrieve_agreements(payload))
    }
  }

export default connect(null,mapDispatchToProps)(PrincipalComponent);
