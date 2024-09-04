import React from 'react'
import './newsletter.css'
import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful travelling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your Email' />
                        <button className='btn newsletter__btn'>Subscribe </button>
                    </div>
                    <p>
                    Subscribe Now for Exclusive Travel Insights: Stay ahead of the curve with our curated travel information delivered straight to your inbox. Get access to insider tips, destination guides, special offers, and travel updates that will enhance your journey and make every trip a seamless, unforgettable experience. Don't miss out, subscribe today!
                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt="" />
                </div>

            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
