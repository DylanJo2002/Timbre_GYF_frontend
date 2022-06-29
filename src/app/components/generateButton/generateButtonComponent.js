import './generateButtonComponet.css';
import report_icon from './file.png';
function GenerateButtonComponent({onClick, value}) {
    console.log(`ONCLICK: ${onClick}, VALUE: ${value}`);
    return (
        <button onClick={ev => onClick(ev.target.closest('button').value)} value={value} className="btn_report">
            <img className="img_icon_report" src={report_icon} alt="icono de reporte" />
        </button>
    )
}

export default GenerateButtonComponent;