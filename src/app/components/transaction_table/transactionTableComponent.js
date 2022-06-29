import './transactionTableComponent.css'
import {formatTime, formatDate} from '../../utils'
import {doPostTransactionsRequest} from '../../api/requests'
import GenerateButtonComponent from '../generateButton/generateButtonComponent'

async function onGenerateButton(receipt_id){
    doPostTransactionsRequest(receipt_id)
    .then(data => {
        if(data) {
            window.open(URL.createObjectURL(data));
        }

    })
}

function TransactionTableComponent(props) {

    return (
        <div className='mt-3'>
            <div className="contenedor-table mx-auto">
            <table className='w-100'>
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>ID RECEIPT</th>
                        <th>ID TRX</th>
                        <th>FECHA</th>
                        <th>HORA</th>
                        <th>USUARIO</th>
                        <th>GENERAR</th>
                    </tr>
                    {
                        props.transactions.map((trx,index) => {
                            return <tr>
                                <td>{index+1}</td>
                                <td>{trx.id_receipt}</td>
                                <td>{trx.id_transaction}</td>
                                <td>{formatDate(trx.transaction_date)}</td>
                                <td>{formatTime(trx.transaction_date)}</td>
                                <td>{trx.user_cnb}</td>
                                <td>{<GenerateButtonComponent onClick={onGenerateButton}
                                    value={trx.id_receipt}>
                                    </GenerateButtonComponent>}</td>
                            </tr>
                        })
                    }
                </thead>
            </table>
            </div>
        </div>
    )
}

export default TransactionTableComponent;