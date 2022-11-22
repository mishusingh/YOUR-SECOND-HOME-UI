import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Service from './Components/Pages/Service';
import "bootstrap/dist/css/bootstrap.min.css";
import PunePG from './Components/PginPune';
import MumbaiPG from './Components/PginMumbai';




//pginpune
function App() {
  return (
    <>
    <Router>
     
      <Navbar />
      <Routes>
        {/* <Route path ='/' exact component = {<Home/>} /> */}
        <Route path="/" element={<Home/>} exact />
        <Route path='/sign-up' element={<SignUp/>} exact />    
        <Route path='/services' element={<Service/>} exact /> 
        <Route path='/pginpune' element={<PunePG/>} exact />  
        <Route path='/pginmumbai' element={<MumbaiPG/>} exact />                        

        
      </Routes>

      </Router>
    </>

  );
}

export default App;
