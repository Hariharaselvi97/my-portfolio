import Navbar from './Components/navbar'
import Homepage from './Components/homepage'
import About from './Components/about'
import Experience from './Components/experience'
import Skill from './Components/skill'
import Project from './Components/project'
import Contact from './Components/contact'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <About/>
      <Experience/>
      <Skill/>
      <Project/>
      <Contact/>
    
    </div>
  )
}
