import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import AppDev from '../../assets/services/app dev.png'
import Testing from '../../assets/services/testing.png'
import WebDev from '../../assets/services/webdev.jpg'
import Dm from '../../assets/services/dm.png'
// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
    <section className="about_section">
        <h1 style={{textAlign:"center", marginBottom:"80px", color:"#3468C0"}}>Services</h1>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <img src={AppDev} style={{width:'auto', maxWidth:"inherit",maxHeight:"50%", marginBottom:"10px"}}/>
           <h4>Android App dev</h4>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <img src={Dm} style={{width:'auto', maxWidth:"inherit",maxHeight:"50%", marginBottom:"10px"}}/>
          <h4>Digital Marketing</h4>

          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <img src={Dm} style={{width:'auto', maxWidth:"inherit",maxHeight:"50%", marginBottom:"10px"}}/>
          <h4>Software Testing</h4>
          

          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <img src={WebDev} style={{width:'auto', maxWidth:"inherit",maxHeight:"50%", marginBottom:"10px"}}/>
          <h4>Software testing</h4>

          </Col>
        </Row>
       
      </Container>
      </section>
    </>
  );
}

export default Section2;
