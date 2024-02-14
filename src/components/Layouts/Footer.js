import React, {useState, useEffect}from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
function Footer() {
// scroll state

const [isVisible, setIsvisible] = useState(false)

const ScrollTop = () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
  const listenToScroll = () => {
    let heightHidden = 250
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightHidden ? setIsvisible(true) : setIsvisible(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);


  return (
    <>
    <footer style={{backgroundColor:"#F5F7F8"}}>
      <Container >
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Location</h5>
              <img src={Logo} style={{width:'auto', maxWidth:"inherit",maxHeight:"80px", marginBottom:"10px"}}/>
              <p>Plot No.14, Laxmi Vasahat,</p>
              <p> Jawahar Nagar, </p>
              <p>Kolhapur-416012</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Navigation</h5>
              <p>Home</p>
              <p>About us</p>
              <p>Who we are</p>
              <p>Contact us</p>
              <p>Services</p>
              <p>Book Online</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Information</h5>
              <p>IOS App Development</p>
              <p>Web Designing</p>
              <p>App Development</p>
              <p>Digital Marketing</p>
              <p>Software Testing</p>
              <p>
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Follow Us</h5>
              <p><b  style={{fontSize:"1.2rem"}}>Collab Vison Infosolution</b></p>
                <Link to="tel:999888777" className='calling' style={{color:"#3468C0"}}>4039358833</Link><br></br>
                Address: <b><Link to="tel:999888777" >
                3235 Warbler way Cumming GA 30041
                </Link></b>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to="/">
                  <i className='bi bi-youtube'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center'>
                <li>
                  <Link to="/">
                    © 2024 <span style={{color:"#3468C0"}}>Collab Vision Infosolution</span>. All Rights Reserved
                  </Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    {/* scroll top */}
    {isVisible && (   <div className='scroll_top'>
      <i className='bi bi-arrow-up' onClick={ScrollTop}></i>
    </div>)}
 
    </>
  );
}

export default Footer;
