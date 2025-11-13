import React from 'react' 
import './experiencepage.css';
import {Card} from 'react-bootstrap';

const experiencepage = () => {
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
      </Card>

  
    </div>
  
 
  )
}

export default experiencepage