// import React from 'react'
// // import TextSparrow from './StyledComponent/TextSparrow'
// import FooterSocialLinks from './StyledComponent/FooterSocialLinks'
// import FooterHomeLink from './FooterHomeLink'
// import Coding from "../assets/projects/programming.svg";


// const Footer = () => {
//     const currentYear = new Date().getFullYear();
//   return (
//     <div>
//         <div className=' pb-4  bg-[#0a0a0a] font-["YesevaOne"]'>
//           <div className='max-w-[1200px] mx-auto'>
//             <div className='flex justify-between  py-10 mb-6'>
//                 <div className=' '>
//                     {/* <TextSparrow/> */}
//                     <img src={Coding} alt="programming-pic" className='w-50  object-cover object-center'/>
//                 </div>
//                 <div className='text-white flex gap-2'>
//                     <FooterSocialLinks/>
//                 </div>
//                  <div>
//                     <FooterHomeLink/>
//                 </div>
//             </div>
//             {/* <div className='w-full h-[0.3px] bg-gradient-to-r from-[#FFE900] to-[#E43D00]'></div> */}
//             <div className='w-full h-[0.3px] bg-[#434343] mb-2'></div>
//               <div className='flex justify-between gap-2 py-4'>
                
//                     <div className='text-gray-400 text-md'>
//                       Copyright  &copy; {currentYear} Balram Rajbanshi. All Rights Reserved.
//                     </div>
                    
//                   <div className='text-gray-400 text-md'>
//                         Made with ❤️ by Balram
//                     </div>
                    
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import FooterSocialLinks from './StyledComponent/FooterSocialLinks'
import FooterHomeLink from './FooterHomeLink'
import Coding from "../assets/projects/programming.svg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='pb-4 bg-[#0a0a0a] font-["YesevaOne"]'>
                <div className='max-w-[1200px] mx-auto '>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 py-6 md:py-5 mb-6'>
                        <div className='w-full md:w-auto'>
                            <img 
                                src={Coding} 
                                alt="programming-pic" 
                                className='w-[200px] md:w-[250px] lg:w-[280px]  mx-auto md:mx-0 object-cover object-center'
                            />
                        </div>
                        <div className='text-white'>
                            <FooterSocialLinks />
                        </div>
                        <div className='w-full md:w-auto text-center md:text-left'>
                            <FooterHomeLink />
                        </div>
                    </div>
                    <div className='w-full h-[0.3px] bg-[#434343] mb-2'></div>
                    <div className='flex flex-col md:flex-row justify-between gap-4 text-center md:text-left '>
                        <div className='text-gray-400 text-sm md:text-md'>
                            Copyright &copy; {currentYear} Balram Rajbanshi. All Rights Reserved.
                        </div>
                        <div className='text-gray-400 text-sm md:text-md'>
                            Made with ❤️ by Balram
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer