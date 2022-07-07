import { Alert } from "@mui/material"
import AlertTitle from "@mui/material/AlertTitle";
import { useSelector } from "react-redux"
import { connect } from "react-redux/es/exports";
import { removeAlert } from "../../redux/slices/alertSlice";
import './alertComponent.css'
const AlertComponent = (props) => {
    const alert = useSelector(state => state.alert);
    return (
        alert.show ?
        <Alert severity={alert.severity} onClose={()=>props.removeAlert()} className="alert-style">
            <AlertTitle>
                {alert.title}
            </AlertTitle>
            {alert.message}
        </Alert>
        :
        <></>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeAlert: () => dispatch(removeAlert())
    }
  }
  

export default connect(null,mapDispatchToProps)(AlertComponent);
