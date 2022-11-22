import React from 'react'
import '../App.css';
import './PginPune.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import download from '../download.jpg';


function PginPune() {
  return (
    <div className="row product">
      <div className="col-md-2">
      <img src= "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img>
      </div>
      <div className="col-md-8 product-detail">
        <h4>Zolo Pg</h4>
        <p>PG for Female</p>
      </div>
      <div className="col-md-2 product-price">
        3500/-
      </div>
      <div className="col-md-2">
        {<img src= "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img>}
      </div>
      <div className="col-md-8 product-detail">
        <h4>Mahesh PG</h4>
        <p>PG for Female</p>
      </div>
      <div className="col-md-2 product-price">
        3000/-
      </div>
      <div className="col-md-2">
        {<img src= "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img>}
      </div>
      <div className="col-md-8 product-detail">
        <h4>Four Wind PG</h4>
        <p>PG for male</p>
      </div>
      <div className="col-md-2 product-price">
        3000/-
      </div>
      <div className="col-md-2">
        {<img src= "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img>}
      </div>
      <div className="col-md-8 product-detail">
        <h4>Space Me</h4>
        <p>PG for Female</p>
      </div>
      <div className="col-md-2 product-price">
        3000/-
      </div>
      <div className="col-md-2">
        {<img src= "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img>}
      </div>
      <div className="col-md-8 product-detail">
        <h4>Mahesh PG</h4>
        <p>PG for Female</p>
      </div>
      <div className="col-md-2 product-price">
        3000/-
      </div>
      <div className="col-md-2">
        { <img src= "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hanmburger"></img> }
      </div>
      <div className="col-md-8 product-detail">
        <h4>PJR Reddy PG</h4>
        <p>PG for Male</p>
      </div>
      <div className="col-md-2 product-price">
        3000/-
      </div>
    </div>
  );
}

export default PginPune
