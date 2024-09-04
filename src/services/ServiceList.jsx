import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    { 
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:'Stay informed with real-time weather updates for a seamless and enjoyable travel experience.',
    },
    { 
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:'Your ultimate companion for immersive and unforgettable travel experiences.',
    },
    { 
        imgUrl:customizationImg,
        title:"Customization",
        desc:'Tailored journeys are designed to match your unique preferences and desires.',
    },
    

    
]
const ServiceList = () => {
  return <> 
  {
    servicesData.map((item,index)=> 
    <Col lg='3' key={index}>
    <ServiceCard item={item} />
     </Col>)
  }
  </>
}

export default ServiceList
