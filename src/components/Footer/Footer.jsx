import React from 'react'
import './footer.css'
import {Container ,Row ,Col,ListGroup ,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const quick__links=[
  {
    path:'/home',
    display:'Home',
  },
  {
    path:'/about',
    display:'About',
  },
  {
    path:'/tours',
    display:'Tours',
  },
  
];

const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery',
  },
  {
    path:'/login',
    display:'Login',
  },
  {
    path:'/register',
    display:'Register',
  },
  
]

const Footer = () => {

  // const year =new Date().getFullYear()
  return (
   <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Discover and Access quicklinks for hassle-free travel essentials and reach out to our expert contacts for personalized assistance on your journey.</p>
              <div className="social__links d-flex align-items-center gap-4"></div>
              <span>
                <Link to='#'>
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <Link to='#'>
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <Link to='#'>
                  <i class="ri-facebook-circle-line"></i>
              </Link>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <Link to='#'>
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'><b>Discover</b></h5>
            <ListGroup className='footer__quick-links'>
                  {
                    quick__links.map((item,index)=>(
                       <ListGroupItem key={index} className='ps-0 border-0'>
                        <Link to={item.path}>{item.display}</Link>
                       </ListGroupItem>
                    ))
                  }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'><b>Quick Links</b></h5>
            <ListGroup className='footer__quick-links'>
                  {
                    quick__links2.map((item,index)=>(
                       <ListGroupItem key={index} className='ps-0 border-0'>
                        <Link to={item.path}>{item.display}</Link>
                       </ListGroupItem>
                    ))
                  }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'><b>Contact</b></h5>
            <ListGroup className='footer__quick-links'>
                       
                       <ListGroupItem className='ps-0 border-0 d-flex
                       align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                          <span>   
                          <i class="ri-map-pin-line"></i> 
                          </span>
                          <b>Address:</b>
                          <p className='mb-0'>Vijayawada,AndhraPradesh</p>
                        </h6>
                        
                       </ListGroupItem>     
            </ListGroup>
            <ListGroup className='footer__quick-links'>
                       
                       <ListGroupItem className='ps-0 border-0 d-flex
                       align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                          <span>   
                          <i class="ri-mail-line"></i> 
                          </span>
                          <b>Email:</b>
                          <p className='mb-0'>sakinabishaik55@gmail.com</p>
                        </h6>
                        
                       </ListGroupItem>     
            </ListGroup>

            <ListGroup className='footer__quick-links'>
                       
                       <ListGroupItem className='ps-0 border-0 d-flex
                       align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                          <span>   
                          <i class="ri-phone-fill"></i> 
                          </span>
                          <b>Phone:</b>
                        
                        <p className='mb-0'>+0123456789</p>
                        </h6>
                       </ListGroupItem>     
            </ListGroup>
          </Col>

          {/* <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year},design and developed by Shaik Sakinabi.All rights reserved</p>
          </Col> */}

        </Row>
      </Container>
   </footer>
  )
}
export default Footer
