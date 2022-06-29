import './generateButtonComponet.css';
import report_icon from './file.png';
import { useDispatch } from 'react-redux'
function GenerateButtonComponent({onClick, value}) {
    const dispatch = useDispatch();
    return (
        <button onClick={ev => onClick(ev.target.closest('button').value,dispatch)} value={value} className="btn_report">
            <img className="img_icon_report" src={report_icon} alt="icono de reporte" />
        </button>
    )
}

export default GenerateButtonComponent;