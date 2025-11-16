'use client';
import React from 'react'
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = () => {
  return (
     <Navbar expand="lg" className='bar'>
      <Container >
        <Navbar.Brand ><h1 style={{color:"white",marginLeft:"10px"}} data-aos="fade-right" data-aos-duration="1000"> Portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end ' style={{marginRight:"-80px"}}>
          <Nav data-aos="fade-left" data-aos-duration="1000">
            <Nav.Link href="#home" className='fw-bold fs-5 text-white nav-items px-3'>Home</Nav.Link>
            <Nav.Link href="#about" className='fw-bold fs-5  text-white nav-items px-3' >About Me</Nav.Link>
            <Nav.Link href="#experience" className='fw-bold fs-5 text-white nav-items px-3'>Experience</Nav.Link>
            <Nav.Link href="#skill" className='fw-bold fs-5 text-white nav-items px-3' >Skills</Nav.Link>
            <Nav.Link href="#project" className='fw-bold fs-5 text-white nav-items px-3' >Projects</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold fs-5 text-white nav-items px-3' >Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar