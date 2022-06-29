import './transactionTableComponent.css'
import {formatTime, formatDate} from '../../utils'

function onGenerateButton(receipt_id){
    console.log("RECEIPT: "+receipt_id);
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
                                <td><button className='btn' value={trx.id_receipt} 
                                    onClick={ev => onGenerateButton(ev.target.value)}>Generar</button></td>
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