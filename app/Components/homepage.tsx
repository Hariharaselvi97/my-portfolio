import React from 'react'
import Image from 'next/image';
import './homepage.css'


const home = () => {
  return (
    <div className='hero' id="home" data-aos="fade-up" data-aos-duration="1000">
        <Image src="/photo/photo1.jpeg" alt='pic2' className='img1' width={190} height={190}/>
        <h1>Iam <span>Hariharaselvi</span></h1>
        <h2>Full Stack Developer</h2>  
        <a href='https://drive.google.com/file/d/14NLaQEFn365lfxy1FNa0cqOg-hTMs9cg/view?usp=drive_link' target='blank'><button className='resume'> Resume</button>  </a>
   </div>
  )
}

export default home
