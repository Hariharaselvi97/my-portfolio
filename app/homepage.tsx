import React from 'react'
import './homepage.css'
import Picture from '../photo/Photo1.jpeg'

const home = () => {
  return (
    <div className='hero' id="home" data-aos="fade-up" data-aos-duration="1000">
        <img src={Picture.src} alt='pic2' className='img1'/>
        <h1>Iam <span>Hariharaselvi</span></h1>
        <h2>Full Stack Developer</h2>  
        <a href='https://drive.google.com/file/d/14NLaQEFn365lfxy1FNa0cqOg-hTMs9cg/view?usp=drive_link' target='blank'><button className='resume'> Resume</button>  </a>
   </div>
  )
}

export default home
