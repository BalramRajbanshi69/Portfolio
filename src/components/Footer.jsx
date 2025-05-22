import React from 'react'
import TextSparrow from './StyledComponent/TextSparrow'
import FooterSocialLinks from './StyledComponent/FooterSocialLinks'
import FooterHomeLink from './FooterHomeLink'


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <div className=' pb-8  bg-[#0a0a0a] font-["YesevaOne"]'>
          <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-between  py-10 mb-6'>
                <div>
                    <TextSparrow/>
                </div>
                <div className='text-white flex gap-2'>
                    <FooterSocialLinks/>
                </div>
                 <div>
                    <FooterHomeLink/>
                </div>
            </div>
            {/* <div className='w-full h-[0.3px] bg-gradient-to-r from-[#FFE900] to-[#E43D00]'></div> */}
            <div className='w-full h-[0.3px] bg-[#434343] mb-2'></div>
              <div className='flex justify-between gap-2'>
                
                    <div className='text-gray-400 text-md'>
                      Copyright  &copy; {currentYear} Balram Rajbanshi. All Rights Reserved.
                    </div>
                    
                  <div className='text-gray-400 text-md'>
                        Made with ❤️ by Balram
                    </div>
                    
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer