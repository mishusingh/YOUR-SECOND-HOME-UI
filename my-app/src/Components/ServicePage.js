import React from 'react'
import '../App.css';
import './ServicePage.css';
import classes from './ServicePage.css';
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import percent from "./public/Percent.png";
//my-app\public\Percent.png



function ServicePage() {
  return (
    
    <section id="why">
    <Container>
      <Row
        className={`${classes.row} mx-auto`}
        // data-aos="fade-up"
        data-aos="fade-right"
        // data-aos-easing="ease-out"
        // data-aos-duration="700"
      >
        <Col xs={12}>
          <div className={classes.header_div}>
            <h2>Services</h2>
            <p>Our service that can fulfil your needs</p>
          </div>
        </Col>
      </Row>

      <Row className={classes.row_cards}>
        <Col
          lg={4}
          className={classes.first_col}
          // data-aos="zoom-in"
          // data-aos-easing="ease-out"
          // data-aos-duration="700"
          // data-aos-delay="100"
        >
          <div className={`${classes.card_one} ${classes.card}`}>
            <div className={classes.card_content}>
              <div className={classes.card_image_div}>
                { <img src= "https://thumbs.dreamstime.com/z/corporate-business-building-logo-vector-graphic-style-realty-real-estate-company-corporate-business-building-logo-vector-162709964.jpg" alt="Hanmburger"></img> }
              </div>
              <div className={classes.card_text_div}>
                <h5>Premium Properties</h5>
                <p>
                  View and book your appointment with our partner{" "}
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col
          lg={4}
          // data-aos="zoom-in"
          // data-aos-easing="ease-out"
          // data-aos-duration="700"
          // data-aos-delay="200"
        >
          <div className={`${classes.card_two} ${classes.card}`}>
            <div className={classes.card_content}>
              <div className={classes.card_image_div}>
                { <img src="https://thumbs.dreamstime.com/z/realty-flat-apartment-modern-building-logo-design-graphic-style-realty-flat-apartment-modern-building-logo-design-graphic-style-158041756.jpg" alt="Delivery man"></img>  
                
                }
              </div>
              <div className={classes.card_text_div}>
                <h5>Zero Security Deposite</h5>
                <p>
                  No need of Security Deposite. Use Rental Guarantees instead!
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col
          lg={4}
          className={classes.last_col}
          data-aos="zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <div className={`${classes.card_three} ${classes.card}`}>
            <div className={classes.card_content}>
              <div className={classes.card_image_div}>
                <img src="https://cdn.vectorstock.com/i/1000x1000/95/76/simple-black-paper-and-pen-icon-logo-design-vector-29509576.webp" alt="Thumbs up"></img>
              </div>
              <div className={classes.card_text_div}>
                <h5>Rental Agreement</h5>
                <p>
                  Create your rental agreement online.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default ServicePage
