import React from 'react'
import EducationTool from './StyledComponent/EducatonTool'
import ProjectCard from './StyledComponent/ProjectCard'
import DotLoader from './StyledComponent/DotLoader'

const Projects = () => {
  return (
    <div>
      <section id='projects' className='max-w-[1200px] mx-auto  pb-20'>
        <div className='flex justify-center items-center pb-10'>
          <EducationTool section="projects"/>
        </div>

        <div>
          <ProjectCard/>
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

export default Projects