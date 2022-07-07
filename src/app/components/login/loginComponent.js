import "./login.css";
import {doLoginRequest} from '../../api/requests'
import { connect } from "react-redux/es/exports";
import {inpunt_change,clear_inputs,login} from '../../redux/slices/sessionSlice'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { doAlert } from "../../redux/slices/alertSlice";

const onLoginButton = async ({user,password},ev,dispath)=>{
  if(user.trim() && password.trim()) {
    ev.preventDefault();
    doLoginRequest(user, password).then(data => {
      if(typeof data.token === 'string') {
        localStorage.setItem('timbre_gyf_token',data.token)
        dispath(clear_inputs());
        dispath(login());
        return;
      }
      dispath(doAlert({
        show: true, 
        severity: "error",
        title: "Error de sesión",
        message: "Usuario o contraseña incorrectos"
        
      }))
    }).catch(err => {
      const error = {
        show: true, 
        severity: "error",
        title: "Error fatal",
        message: "Error al realizar la petición de inicio de sesión."
        
      }
      dispath(doAlert(error))
      console.log("ERROR LOGIN",error);
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
