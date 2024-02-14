import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Layouts/Cards";
import Internship from "../../assets/menu/internship.jpg";
import Branding from "../../assets/menu/branding.jpeg";
import Consult from "../../assets/menu/consult.jpg";
import Design from "../../assets/menu/design.png";
import Dap from "../../assets/menu/dap.jpg";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Internship,
    title: "Internship",
    paragraph:
      "Branding is the process of building a brand.To be more specific, it is a strategy designed by companies to help people to quickly identify their products and organization, and give them a reason to choose their products over the competition.",
  },
  {
    id: "0002",
    image: Branding,
    title: "Branding",
    paragraph:
      "A professional learning experience that offers meaningful,practical work related to a student's field of study or career interest. An internship gives a student the opportunity forcareer exploration and development, and to learn new skills.",
  },
  {
    id: "0003",
    image: Consult,
    title: "Consult",
    paragraph:
      "Branding is the process of building a brand. To be more specific, it is a strategy designed by companies to help people to quickly identify their products and organization, and give them a reason to choose their products over the competition.",
  },
  {
    id: "0004",
    image: Design,
    title: "Design",
    paragraph:
      "Branding is the process of building a brand. To be more specific, it is a strateg designed by companies to help people to quickly identify their products and organization, and give them a reason to choose their products over the competition.",
  },

  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2 className="red-alignment">Collab Vision Info Solutions</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div style={{marginBottom:"50px"}}>
            <img src={Dap} style={{borderRadius:"8px"}}/>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <h1 style={{ textAlign: "center" , marginTop:"20px"}}>
              <span style={{ color: "#3652AD" }}>Passionate</span>
              <span style={{ color: "#474F7A" }}>
                 in providing Innovative
              </span>{" "}
              <span style={{ color: "#3652AD" }}>Digital Solutions</span>{" "}
              <span style={{ color: "#474F7A" }}>to empower youth.</span>
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontSize: "1.2rem",
              }}
            >
              We are young, small start-up. We build everything around “People”.
              We are agile software engineers, passionate for work / life
              balance. We all love programming and are addicted to new
              technologies
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
