import './App.css';
import Login from './components/login/loginComponent';
import { useSelector } from 'react-redux'
import  Header from './components/header/headerComponent';
import Footer from './components/footer/footerComponent';
import PrincipalComponent from "./components/principal/principalComponent";
import AlertComponent from './components/alert/alertComponent';
function App() {
  const session = useSelector((state) => state.session.value);
  const firstScreen = 
    session? <PrincipalComponent></PrincipalComponent>  :  <Login></Login>;  

  return (
    <>
        <AlertComponent severity={"error"} message={"this is a message error"}></AlertComponent>
        <Header login={session}></Header>
        {firstScreen}
        <Footer></Footer>
    </>
    
  );
}

export default App;
