import "./login.css";
import {doLoginRequest} from '../../api/requests'
import { connect } from "react-redux/es/exports";
import {inpunt_change,clear_inputs,login} from '../../redux/slices/sessionSlice'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";

const onLoginButton = async ({user,password},ev,dispath)=>{
  if(user.trim() && password.trim()) {
    ev.preventDefault();
    doLoginRequest(user, password).then(data => {
      if(data.token) {
        localStorage.setItem('timbre_gyf_token',data.token)
        dispath(clear_inputs());
        dispath(login());
        return;
      }
      alert(data.message);
    }).catch(err => {
      console.log(`ERR: ${err}`);
    }).finally(()=> {
      ev.preventDefault();
    })

  }
}

function Login(props) {
  const login = useSelector(state => state.input_user_login);
  const dispath = useDispatch();
  return (
    <div className="d-flex justify-content-center align-items-center div-container-login">
      <form onSubmit={(ev)=>{onLoginButton(login,ev,dispath)}}>
        <div className="div-form-login background-white d-flex flex-column gap-3">
          <div className="d-flex justify-content-between">
            <label htmlFor="user">Usuario</label>
            <input onChange={ev=>props.imput_changed({user:ev.target.value})} name="user" type="text"  placeholder="Usuario de red" required/>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="password">Contraseña</label>
            <input  onChange={ev=>props.imput_changed({password:ev.target.value})}  name="password" type="password" placeholder="Contraseña de red" required/>
          </div>
          <div className="mx-auto mt-3">
            <button className="btn btn-ingresar" onClick={(ev)=>{onLoginButton(login,ev,dispath)}}>Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    imput_changed: (payload) => dispatch(inpunt_change(payload))
  }
}

export default connect(null,mapDispatchToProps)(Login);
