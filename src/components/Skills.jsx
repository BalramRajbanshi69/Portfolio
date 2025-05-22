import React from 'react'
import EducationTool from './StyledComponent/EducatonTool'
import TechStack from './StyledComponent/TechStack'
import DotLoader from './StyledComponent/DotLoader'

const Skills = () => {
  return (
    <div>
      <section id='skills' className='max-w-[1200px] mx-auto  pb-20 '>
        <div className='flex justify-center items-center pb-10'>
          <EducationTool section="skills"/>
        </div>

        <div>
          <TechStack/>
        </div>

          {/* dot loader */}
         <div className='py-20 flex justify-center items-center '>
            <DotLoader/>
          </div>
        {/* divider */}
        <div className='hidden md:block w-full h-[2px] bg-gray-900 '></div>
        </section>
      
    </div>
  )
}

export default Skills