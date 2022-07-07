import './headerComponent.css'
import UserComponent from '../user/userComponent';

function header({login}) {
    return (
        <header>
            <div className="background-blue d-flex justify-content-center align-items-center div-header">
                <h1 className='soft-blue'>GENERACIÓN DE TIMBRES DE RECAUDO</h1>
                {login ? 
                <UserComponent></UserComponent>
                :
                <></>
                }
            </div>
        </header>
    )
}

export default header;