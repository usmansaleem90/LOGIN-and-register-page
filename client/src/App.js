import './App.css';
import Naav from './Components/Header/Naav';
import Home from './Components/Home/Home';
import LogIn from './Components/Login/LogIn';
import Register from './Components/Register/Register';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
       <Router>
      <Naav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/log" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </Router>
   </>
       
  );
}

export default App;
