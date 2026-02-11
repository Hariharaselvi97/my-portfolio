import React from 'react'
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';
import './skill.css';

const skill = () => {
  return (
    <div className='skill-section' id="skill"  >
        <h1 data-aos="fade-right" data-aos-duration="1000">Skills</h1><br/><br/>
       
<Container className='skill-name' data-aos="fade-down" data-aos-duration="1000">
      <Row xs={2} md={4} lg={4}>
        <Col className='bor'>HTML
        <ProgressBar animated variant="warning" now={90}  />
        </Col>
        <Col className='bor'>CSS
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>JavaScript
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>Bootstrap
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>React Js
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
         <Col className='bor'>Next Js
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>Node Js
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>Express Js
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
        <Col className='bor'>MongoDB
        <ProgressBar animated variant="warning" now={90}/>
        </Col>
     </Row>
    </Container>
    </div>
  )
}

export default skill