import React from 'react'
import {Project} from "../Components/data"
import { motion } from "framer-motion"

function Exp() {

  return (
    <div id= 'Experience' className='flex flex-col items-center justify-center h-[90vh] max-w-7xl mx-auto mt-[15rem] md:mt-[-1rem]'>
    <div  
    className='flex flex-col gap-[4px] scroll-mt-[100rem]'>
        <h1 className='text-xl font-[400] sm:text-[22px] sm:text-4xl text-white '>Experience</h1>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between my-[10px] '>
                <div className='flex flex-wrap leading-[1.5] text-[14px] w-1/3 md:pt-[6px] text-white'>March 2023- july 2023</div>
            <div>
                <h2 className='text-[16px] mb-2 font-[400] sm:text-3xl text-white '>Font-end Intern</h2>
                <p className='text-[14px] leading-2 mb-5 dark:text-[#bbbbbb]'>During my internship, I had the opportunity to collaborate closely with both the design and development teams. In this dynamic role,
                , I was hands-on in the creation of wireframes, not just as an assistant but making significant contributions. I was deeply involved in turning high-fidelity Figma wireframes into a seamless and user-friendly design.
                with a particular focus on pivotal components like the login page and dashboard. These projects were a testament to my hands-on involvement and collaborative approach, showcasing the tangible impact I had during this experience.
                </p>
                <div className='flex flex-wrap gap-[6px] sm:gap-[7px]'>{Project.map((item,i)=>
                        <motion.span  initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{
                          duration:0.3,
                          delay:i * 0.5,
                        }}
                        viewport={{
                          once:true
                        }}
                       
                        key={item.hash} className="px-3 py-1.5 m-1 border  text-white rounded-lg  bg-[#40cf8f0f] gap-4 cursor-pointer text-[15px] hover:border-[#504f4f] hover:z-50  hover:duration-600 
//                    hover:duration-400 hover:transition-colors     hover:ease-in-out" >{item.name}</motion.span>)}
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Exp
