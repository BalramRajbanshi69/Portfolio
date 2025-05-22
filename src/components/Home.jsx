import React from 'react';
import "../App.css";
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import MainHome from './MainHome';
import Contact from './Contact';
import Footer from './Footer';




const Home = () => {
  return (
    <div>
    <div className='min-h-screen bg-black'>

      {/* Main Home */}
      <MainHome/>
      
      {/* skills */}
      <Skills/>

      {/* projects */}
       <Projects/>

      {/* education */}
      <Education/>

      {/* contact */}
      <Contact/>
    </div>

    {/* Footer */}
    <Footer/>

    </div>

  )
}

export default Home