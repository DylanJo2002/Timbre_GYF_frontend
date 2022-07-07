import logo from './logo_GYF.png';
import './footerComponent.css';
function footerComponent() {
    return (
        <footer>
            <div className='background-blue d-flex justify-content-center div-footer'>
                <img src={logo} alt="Logo Giros y Finanzas" className='img-fluid logo'/>
            </div>
        </footer>
    )
}

export default footerComponent;