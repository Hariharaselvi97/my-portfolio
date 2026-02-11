import React from 'react'
import './about.css';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';




const about = () => {
  return (
  <div className='about1' id="about" >
       
            <h1 data-aos="fade-right" data-aos-duration="1000">About Me</h1><br/><br/>

        <div>
        <Container  className='details'>
      <Row>
        <Col data-aos="fade-down" data-aos-duration="1000">
                  Hi,I’m a Junior Full Stack Developer experienced in React, Next.js, and the MERN stack. 
                  I’ve completed professional training and an internship, working on real-world projects focused on performance, responsiveness, and clean code.
                  I’m passionate about continuous learning, problem-solving, and writing efficient code. 
                  I’m actively looking for a Junior Full Stack Developer role where I can apply my skills and grow professionally.</Col>
      </Row>
    </Container>
    </div>
     </div>
  )
}

export default about