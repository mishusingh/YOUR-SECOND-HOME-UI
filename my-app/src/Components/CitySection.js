import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";
//import {Button} from './Button';
import './CitySection.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
//https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune-1400x700.png

function CitySection() {
  return (
//     <div class="row">
//   <div class="column">
//     <img src="img_snow.jpg" alt="Snow" style="width:100%">
//   </div>
//   <div class="column">
//     <img src="img_forest.jpg" alt="Forest" style="width:100%">
//   </div>
//   <div class="column">
//     <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
//   </div>
// </div>

     <>
     <Row className = 'row-container'>
     <Col className="column">
     <Link to="/pginpune">
        <img
          src="https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune-1400x700.png"
          alt="example"
        />
      </Link>
      </Col>

      <Col className="column">
      <Link to="/pginmumbai">
        <img
          src="https://wallpapers.com/images/high/mumbai-city-monuments-hnq8g0frsq6jkxj1.webp"
          alt="example"
        />
      </Link>
      </Col>
      </Row>
      <Row className = 'row-container'>
     <Col className="column">
     <Link to="/pginpune">
        <img
          src="https://img.staticmb.com/mbcontent//images/uploads/2022/8/posh-areas-in-noida_11zon.jpg"
          alt="example"
        />
      </Link>
      </Col>

      <Col className="column">
      <Link to="/pginpune">
        <img
          src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/12/26204246/BengaluruLogo.jpg?fm=webp&w=750&h=500&dpr=2"
          alt="example"
        />
      </Link>
      </Col>
      </Row>


      <Row className = 'row-container'>
     <Col className="column">
     <Link to="/pginpune">
        <img
          src="https://www.constructionworld.in/assets/uploads/4eb3fbb1168d3c26ddc3ce7b5b748afd.jpg"
          alt="example"
        />
      </Link>
      </Col>

      <Col className="column">
      <Link to="/pginpune">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/42/33.jpg"
          alt="example"
        />
      </Link>
      </Col>
      </Row>

</>

  

      
      
      

     
     
    
    
    // <div className='image-container'>
      
    //   {/* 👇️ react router link */}
    //   <Link to="/pginpune">
    //     <img
    //       src="https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune-1400x700.png"
    //       alt="example"
    //     />
    //   </Link>

    //   <br />
    //   <br />

    //   {/* 👇️ Anchor link */}
    //   <a href="https://google.com" target="_blank" rel="noreferrer">
    //     <img
    //       src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
    //       alt="example"
    //     />
    //   </a>
    // </div>
 
  )
}

export default CitySection
