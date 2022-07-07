import './App.css';
import Login from './components/login/loginComponent';
import { useSelector, useDispatch } from 'react-redux'
import  Header from './components/header/headerComponent';
import Footer from './components/footer/footerComponent';
import PrincipalComponent from "./components/principal/principalComponent";

function App() {
  const session = useSelector((state) => state.session.value);
  const firstScreen = 
    session? <PrincipalComponent></PrincipalComponent>  :  <Login></Login>;  
  
  return (
    <>
        <Header login={session}></Header>
        {firstScreen}
        <Footer></Footer>
    </>
    
  );
}

export default App;
