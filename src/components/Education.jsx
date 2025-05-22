import React from 'react'
import EducationTool from './StyledComponent/EducatonTool'
import LearnDate from './StyledComponent/LearnDate'
import CardEducation from './StyledComponent/CardEducation'
import DotLoader from './StyledComponent/DotLoader'

const Education = () => {
  return (
    <div>
         <section id='education' className='max-w-[1200px] mx-auto  pb-20'>
        <div className='flex justify-center items-center pb-10'>
          <EducationTool section="education"/>
        </div>

        {/* Graduation */}
        <div className='flex flex-col md:flex-row justify-start items-start min-h-[60vh] md:h-[100vh] px-4 md:px-40 py-5 md:py-10'>
          <div className='hidden md:block text-white w-[2px] h-[100vh] bg-red-400'></div>
          <div className='w-full text-white flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 px-2 md:px-12 py-6 md:py-12'>
            <div className='w-full md:w-auto'>
              <LearnDate level="graduation"/>
            </div>
            <div className='w-full md:w-auto px-4 md:px-0'>
              <CardEducation level="graduation"/>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className='flex flex-col md:flex-row justify-start items-start min-h-[60vh] md:h-[100vh] px-4 md:px-40 py-5 md:py-10'>
          <div className='hidden md:block text-white w-[2px] h-[100vh] bg-green-400'></div>
          <div className='w-full text-white flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 px-2 md:px-12 py-6 md:py-12'>
            <div className='w-full md:w-auto'>
              <LearnDate level="highSchool"/>
            </div>
            <div className='w-full md:w-auto'>
              <CardEducation level="highSchool"/>
            </div>
          </div>
        </div>

        {/* School */}
        <div className='flex flex-col md:flex-row justify-start items-start min-h-[60vh] md:h-[100vh] px-4 md:px-40 py-5 md:py-10'>
          <div className='hidden md:block text-white w-[2px] h-[100vh] bg-yellow-400'></div>
          <div className='w-full text-white flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 px-2 md:px-12 py-6 md:py-12'>
            <div className='w-full md:w-auto'>
              <LearnDate level="school"/>
            </div>
            <div className='w-full md:w-auto'>
              <CardEducation level="school"/>
            </div>
          </div>
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

export default Education