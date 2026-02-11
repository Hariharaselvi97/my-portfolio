'use client';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './experience.css'

const experience = () => {
  return (
    <div className='exp ' id="experience" >
        <h1 data-aos="fade-right" data-aos-duration="1000" >Experience</h1><br/><br/><br/>
        <Card className='mx-auto d-block ' style={{ width: '36rem',backgroundColor:"transparent",border:"2px solid yellow" ,color:"white",marginLeft:"400px"}}
        data-aos="fade-down" data-aos-duration="1000">
        <Card.Header style={{fontSize:"25px"}}>Backend Developer</Card.Header>
        <Card.Body>
          <Card.Title>FEB 2021 - MAY 2022</Card.Title>
          <Card.Title>DSRT Pvt Ltd., Tamilnadu,India</Card.Title>
          <Card.Text>
            Collecting and reporting important data to clients and management.
            Solving  issues and finding opportunities for improvement, compiling and analyzing 
            data procedures and codes.
          </Card.Text>
        </Card.Body>
        </Card><br></br>
         <Card className='mx-auto d-block ' style={{ width: '36rem',backgroundColor:"transparent",border:"2px solid yellow" ,color:"white",marginLeft:"400px"}}
        data-aos="fade-down" data-aos-duration="1000">
          <Card.Header style={{fontSize:"25px"}}>Junior Full Stack Developer Intern (Remote)</Card.Header>
         <Card.Body>
          <Card.Title>SEP 2025 - JAN 2026</Card.Title>
          <Card.Title>Adnecto Technologies(OPC) Pvt Ltd., Kerala,India</Card.Title>
          <Card.Text>
            Developed backend services using Node.js, Express, and MongoDB
            Built and integrated frontend components with  Next.js
            Created and consumed RESTful APIs
            Focused on performance, clean code, and scalability
          </Card.Text>
        </Card.Body>
      </Card>

  
    </div>
  )
}

export default experience