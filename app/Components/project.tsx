'use client';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Image from 'next/image';
import './project.css'


const project = () => {
  return (
   <div className='project-name' id="project" >
  <h1  data-aos="fade-right" data-aos-duration="1000">Projects</h1><br/><br/>
<Container fluid="md" >
<Row  xs={1} md={4} lg={3}  className="g-3 " style={{ width: '58rem',marginLeft:"50px" }}>
  <Col><div className="container py-2 px-4 " data-aos="zoom-in" data-aos-duration="1000">
 <Image src='/photo/project1.png' alt="Avatar" className="image" width={267} height={200} />


 <div className='text1'> Netflix website homepage  using HTML and CSS.</div>

 </div></Col>
  <Col> 
  <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
<Image src='/photo/project2.png' alt="Avatar" className="image" width={267} height={200} />

 <div className="text1"> Beauty care website
   using HTML , CSS and JavaScript.</div>

 </div></Col>

 <Col> 
 <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
 <Image src='/photo/project3.png' alt="Avatar" className="image" width={267} height={200} />

 <div className="text1">  Display the system time using HTML, CSS, JavaScript. </div>

 </div></Col>

 
 <Col> 
 <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
 <Image src='/photo/project4.png' alt="Avatar" className="image" width={267} height={200} />

<div className="text1">  World tour project using HTML, CSS, media queries.</div>

</div></Col>

 
 <Col> 
 <div className="container py-2 px-4 " data-aos="zoom-in" data-aos-duration="1000">
 <Image src='/photo/project5.png' alt="Avatar" className="image" width={267} height={200} />
 
 <div className="text1">  Flight Booking website using Html, CSS and React.js.
              </div>

 </div></Col>

 
 <Col> 
 <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
<Image src='/photo/project6.png' alt="Avatar" className="image" width={267} height={200} />
 
 <div className="text1"> Theatre Management System website using MERN.</div>


 </div></Col>

  <Col> 
 <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
<Image src='/photo/project7.png' alt="Avatar" className="image" width={267} height={200} />
 
 <div className="text1"> Calculator using HTML,CSS,Nextjs.</div>


 </div></Col>

  <Col> 
 <div className="container py-2 px-4" data-aos="zoom-in" data-aos-duration="1000">
<Image src='/photo/project8.png' alt="Avatar" className="image" width={267} height={200} />
 
 <div className="text1"> Quiz game using HTML,CSS,Nextjs.</div>


 </div></Col>
</Row>

</Container>
</div>
  )
}

export default project