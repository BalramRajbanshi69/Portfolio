import React from 'react'
import DotLoader from './StyledComponent/DotLoader'
import { TypeAnimation } from 'react-type-animation'
import HelloLoader from './StyledComponent/HelloLoader'
import ProfileCard from './StyledComponent/ProfileCard'
import CV from './StyledComponent/CV'

const MainHome = () => {
  return (
    <div>
      <section id="home" className='max-w-[1200px] mx-auto py-30'>
        <div className='flex flex-col md:flex-row items-center justify-center  w-full mx-auto gap-6'>
          {/* Profile Card Container */}
          <div className='w-full md:w-1/2 flex justify-center md:justify-end items-center mb-8 md:mb-0'>
            <ProfileCard/>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className='hidden md:block w-[2px] h-[70vh] bg-gray-900'></div>

          {/* Content Container */}
          <div className='w-full md:w-1/2 text-white text-center md:text-left  md:px-1'>
            <div className='flex flex-col gap-3 h-[50vh] items-center md:items-start'>
              <div className='w-full flex justify-center md:justify-start'>
                <HelloLoader/>
              </div>
              <div >
                <h1 className='text-4xl intro font-bold text-white leading-tight'>I'm Balram Rajbanshi</h1>
              </div>
              <div className='w-full flex justify-center md:justify-start'>
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    1000,
                    'React Developer',
                    1000,
                    'Backend Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-2xl font-semibold text-cyan-400 font-['YesevaOne'] "
                  repeat={Infinity}
                  cursor={true}
                  style={{ display: 'inline-block' }}
                />
              </div>
              <div>
                  <p className='text-xl leading-tight tracking-wide font-["YesevaOne"] font-regular'>
                    A passionate full-stack developer specializing in MERN stack development. Skilled in both front-end and back-end development.
                    I craft elegant solutions to complex problems and build seamless user experiences.
                  </p>
              </div>
              <div className='py-4 w-full flex justify-center md:justify-start'>
                <CV/>
              </div>
            </div>

          </div>
        </div>
        {/* dot loader */}
        <div className='py-20 flex justify-center items-center '>
          <div className='text-white'>
            <DotLoader/>
          </div>
        </div>
        {/* divider */}
        <div className='hidden md:block w-full h-[2px] bg-gray-900 '></div>
      </section>
        
    </div>
  )
}

export default MainHome;