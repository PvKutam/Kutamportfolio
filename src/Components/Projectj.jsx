import React,{useRef} from "react";
import { motion,useScroll,useTransform } from "framer-motion";
import { An9me,Pallet,Peddit,Yellow } from './data'

function Projects(){
    const ref= useRef(null)
   const {scrollYProgress}= useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
const scaleProgress=useTransform(scrollYProgress,[0 ,1],[0.8,1])
const opacityProgress=useTransform(scrollYProgress,[0 ,1],[0.5,1])
    return(
        <>
        <div id='Project' className="mx-auto md:w-[80%]">
        <motion.div  
        style={{
            scale:scaleProgress,
            opacity:opacityProgress,
        }}
        viewport={{
            once:true,
          }}
        className="flex flex-col gap-[20px] sm:gap-[30px] scroll-mt-28">
            <h1 className="text-xl font-[500] sm:text-[22px] sm:text-4xl text-white ">Projects</h1>
            <div className="flex flex-col gap-5 md:flex-row md:grid md:gap-[10px] md:grid-cols-2 ">
                    <div className="relative flex flex-col justify-between items-start p-[18px] rounded-[5px]
                            border border-solid border-[#2d2d2d] text-[14]
                            h-[150px] bg-[#1c1c1c] shadow-md transition-border duration-200 ease-linear 
                            sm:p-6 sm:items-center md:h-[200px] hover:border-2
                           hover:border-stone-600 hover:transition-all hover:duration-400 hover:ease-in-out 
                            " onClick={()=>{window.location.href = "https://pallet-rho.vercel.app/";}}>
                                {/* Git hub , link svg */}
                            <div className="flex self-end gap-[30px]">
                            <a href="https://github.com/PvKutam/peddit">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 
                                    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
                                    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
                                    6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    ></path>
                                </svg>
                            </a>
                            </div>
                            <h2 className="font-[400] mt-[-100px] uppercase text:sm md:text-xl text-white  sm:mt-[-40px]"> 🐸 Peddit</h2>
                            <div className="flex self-center gap-[15px]">
                            {Peddit.map((item)=>
                            <span className=" text-sm md:text-base text-[#bbbbbb]  
                           " key={item.hash}>
                                    {item.name}
                            </span>)}
                            </div>
                    </div>
                    <div className="relative flex flex-col justify-between items-start p-[18px] rounded-[5px]
                            border border-solid border-[#2d2d2d] text-[14]
                            h-[150px] bg-[#1c1c1c] shadow-md transition-border duration-200 ease-linear 
                            sm:p-6 sm:items-center md:h-[200px] hover:border-2
                           hover:border-stone-600 hover:transition-all hover:duration-400 hover:ease-in-out 
                            " onClick={()=>{window.location.href = "https://pallet-rho.vercel.app/";}}>
                                {/* Git hub , link svg */}
                            <div className="flex self-end gap-[30px]">
                            <a href="https://github.com/PvKutam/Yellow">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 
                                    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
                                    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
                                    6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    ></path>
                                </svg>
                            </a>
                            </div>
                            <h2 className="font-[400] mt-[-100px] uppercase text:sm md:text-xl text-white  sm:mt-[-40px]"> 🔵Yellow</h2>
                            <div className="flex self-center gap-[15px]">
                            {Yellow.map((item)=>
                            <span className="text-sm md:text-base text-[#bbbbbb]  
                           " key={item.hash}>
                                    {item.name}
                            </span>)}
                            </div>
                    </div>    
                    <div className="relative flex flex-col justify-between items-start p-[18px] rounded-[5px]
                            border border-solid border-[#2d2d2d] text-[14]
                            h-[150px] bg-[#1c1c1c] shadow-md transition-border duration-200 ease-linear 
                            sm:p-6 sm:items-center md:h-[200px] hover:border-2
                           hover:border-stone-600 hover:transition-all hover:duration-400 hover:ease-in-out 
                            "  onClick={()=>{window.location.href = "https://an9me.vercel.app/";}}>
                            
                            
                                {/* Git hub , link svg */}
                            <div className="flex self-end gap-[30px]">
                            <a href="https://github.com/PvKutam/An9me">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 
                                    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
                                    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
                                    6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://an9me.vercel.app/">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"> </path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"> </path>
                                </svg>
                            </a>
                            </div>
                            <h2 className="font-[400] mt-[-100px] uppercase text:sm md:text-xl text-white  sm:mt-[-40px]">🦝An9me</h2>
                            <div className="flex self-center gap-[15px]">
                            {An9me.map((item)=>
                            <span className="text-sm md:text-base text-[#bbbbbb]
                           " key={item.hash}>
                                    {item.name}
                            </span>)}
                            </div>
                    </div>
                    <div className="relative flex flex-col justify-between items-start p-[18px] rounded-[5px]
                            border border-solid border-[#2d2d2d] text-[14]
                            h-[150px] bg-[#1c1c1c] shadow-md transition-border duration-200 ease-linear 
                            sm:p-6 sm:items-center md:h-[200px] hover:border-2
                           hover:border-stone-600 hover:transition-all hover:duration-400 hover:ease-in-out 
                            " onClick={()=>{window.location.href = "https://pallet-rho.vercel.app/";}}>
                                {/* Git hub , link svg */}
                            <div className="flex self-end gap-[30px]">
                            <a href="https://github.com/PvKutam/Pallet">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 
                                    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
                                    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
                                    6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://pallet-rho.vercel.app/">
                                <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"> </path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"> </path>
                                </svg>
                            </a>
                            </div>
                            <h2 className="font-[400] mt-[-100px] uppercase text:sm md:text-xl text-white  sm:mt-[-40px]">🐈Pallet</h2>
                            <div className="flex self-center gap-[15px]">
                            {Pallet.map((item)=>
                            <span className="text-sm md:text-base text-[#bbbbbb]  
                           " key={item.hash}>
                                    {item.name}
                            </span>)}
                            </div>
                    </div>
                   
            </div>
        </motion.div>
        </div>
        </>
    )
}

export default Projects

