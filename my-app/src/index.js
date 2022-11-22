import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";


import App from './App';
//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome, faBars, faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faHome, faBars, faXmark, faCircleXmark )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App /> 
  
);


