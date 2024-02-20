import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-iterems-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0"></Col>
            <Col lg={6} className="px-5">
              <div style={{ backgroundColor: "#f7f8f9", borderRadius:"10px" }}>
                <form className="p-3">
                  <div className="mb-3">
                    <div>
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <input
                      style={{ boxShadow: "2px 2px 15px #f7f8f9" }}
                      type="text"
                      className="mb-3 form-control"
                      id="exampleInputPassword1"
                    />
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      style={{ boxShadow: "2px 2px 15px #f7f8f9" }}
                      type="email"
                      className="mb-3 form-control"
                      id="exampleInputPassword1"
                    />
                    </div>
                    <label for="exampleInputEmail1" class="form-label">
                    What did you liked the most?
                    </label>

                    <textarea
                      type="text"
                      className="mb-3 form-control"
                      id="exampleInputPassword1"
                    />
                     <label for="exampleInputEmail1" class="form-label">
                     How can we improve?
                    </label>
                    <textarea
                      type="text"
                      className="mb-3 form-control"
                      id="exampleInputPassword1"
                    />

                  <button type="submit" className="btn btn-success" style={{width:"100%"}}>
                    Submit
                  </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG paralax scroll */}
      <section className="bg_paralax_scroll"></section>
    </>
  );
}

export default Section4;
