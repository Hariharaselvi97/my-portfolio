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
        <Col data-aos="fade-down" data-aos-duration="1000">I am a motivated Backend Developer with one year of experience in building and maintaining server-side applications.
                   I specialize in creating efficient, reliable, and scalable backend solutions. Having completed a Full Stack Development course,
                   I have a comprehensive understanding of both frontend and backend technologies, enhancing my ability to collaborate 
                   effectively with cross-functional teams. I am passionate about problem-solving
                   and quick to adapt to new technologies, making me a valuable asset in dynamic web development environments.</Col>
      </Row>
    </Container>
    </div>
     </div>
  )
}

export default about