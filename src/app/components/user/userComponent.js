import { Collapse } from 'react-collapse';
import userIcon from './img/user_icon.png';
import { useState } from 'react';
import './userComponent.css'
import { useSelector } from 'react-redux';
import { formatDate, formatTime } from '../../utils';



const UserComponenet = () => {
    const [collapse, setCollapse] = useState(true);
    const {decoded: {sub, iat} } = useSelector(state => state.session);
    const date = new Date(iat*1000);
    const string_date =  formatDate(date);
    const string_time =  formatTime(date);

    return (
        <div className='user-container'>
            <div className='user-content-container'>
                <button className='rounded-circle btn-user' onClick={e => setCollapse(!collapse)}>
                    <img src={userIcon} alt="Ícono de usuario" className='img-user'/>
                </button>
            </div>
            <Collapse isOpened={!collapse}>
                <div className='user-info-container'>
                    <div className="row m-0 p-0">
                        <div className="col-6 m-0 p-0">
                            <p><strong>USUARIO: </strong></p>
                        </div>
                        <div className="col-6 m-0 p-0">
                            <p>{sub}</p>
                        </div>
                        <div className="col-6 m-0 p-0">
                            <p><strong>SESSIÓN: </strong></p>
                        </div>
                        <div className="col-6 m-0 p-0">
                            <p className='m-0'>{string_date}</p>
                            <p className='m-0'>{string_time}</p>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default UserComponenet;