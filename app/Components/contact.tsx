'use client';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import './contact.css';



const contact = () => {

     const[loginInfo,setLoginInfo]=useState(
    {
    name:"",
    email:"",
    message:""
     
    }
  )
  const handlechange=(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        
    const{name,value}=event.target;
    setLoginInfo((currinfo)=>
    {
       return{...currinfo,[name]:value,};
    })
  }



  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginInfo({
      name:"",
      email:"",
      message:""
    })
    
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    formData.append("access_key", "53d3a79e-ec61-4b55-96d9-878258294f29");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Email has sent successfully!!!')
    }
  };
  return (
    <div className='con' id="contact">
        <h1 data-aos="fade-right" data-aos-duration="1000">Contact Me</h1><br/><br/>
        <div>
         
          <Container fluid="md" className='detail'>
      <Row>
        <Col  data-aos="fade-down" data-aos-duration="1000">Iam currently available to take on new projects, so fell free to send a message about anything that
        you want me to work on . You can contact anytime.</Col>
      </Row>
    </Container><br/><br/><br/>

          <Container className='skill-name'>
      <Row xs={1} md={4} lg={1} data-aos="fade-down" data-aos-duration="1000">
        <Col className='contact1'><i className="bi bi-envelope"></i>  hariharaselvi1997@gmail.com
        
        </Col>
          <Col className='contact2'>
        <Nav.Link  href="https://www.linkedin.com/in/hariharaselvi" target='_blank'  ><i className="bi bi-linkedin"></i> Linkedin
        </Nav.Link>
        </Col>

       <Col className='contact3'>
        <Nav.Link href="https://github.com/Hariharaselvi97" target='_blank'  ><i className="bi bi-github"></i> Github
        </Nav.Link>
        </Col>

        <Col className='contact4'><i className="bi bi-telephone"></i>  +91 9952781630
        
        </Col>
        <Col className='contact5'><i className="bi bi-geo-alt"></i>   Tamilnadu ,India
        
        </Col>
        
     </Row>
    </Container>
   
        </div>


    
    <form onSubmit={onSubmit} className='talk' data-aos="fade-down" data-aos-duration="1000" >
        <label >Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" value={loginInfo.name} onChange={handlechange} /><br/>
        
        <label >Your Email</label>
        <input type="email" name="email" placeholder="Enter your email" value={loginInfo.email} onChange={handlechange}  /><br/>

        <label  >Write your message here</label>
        <textarea name="message" rows={3} placeholder="Write your message" value={loginInfo.message} onChange={handlechange}  ></textarea><br/>

        <button type="submit" className='butt'>Submit </button>
      </form>

   
    </div>
           
  )
}

export default contact