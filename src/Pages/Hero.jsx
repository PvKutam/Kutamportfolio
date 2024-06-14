import Header from "../Components/Header";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Scroll from "../Scroll.json";


export default function Example() {
  return (
    <div>
     <Header />
      <div id="Home" className="mx-auto max-w-5xl flex justify-center items-center h-screen mt-[-2rem] sm:mt-0 md:mt-20">
        <motion.div
          className=" w-full top-[5rem] flex flex-col items-center justify-center text-black pt-5  scroll-mt-28
             bg-auto bg-no-repeat bg-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="flex flex-col   z-[1] font-[400] text-[34px] mb-8 sm:text-[40px] md:text-[60px] lg:text-[75px] ">
            <span className="bg-gradient-to-r  inline-block text-transparent bg-clip-text from-[#757474] via-[#757474] to-[#757474]">
              Hello I'm Kutam.
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              A Digital Craftsman
            </span>
          </h1>
          <p className=" leading-1.8  m-auto max-w-[350px] text-[14px] sm:max-w-[400px] sm:text-xl md:max-w-[640px] :text-xl line-height-20 text-[#bbbbbb]  ">
          I'm an aspiring software engineer passionate about developing software that creates experiences which are easy to use, accessible, and meet the user's needs.
          </p>
          <div className="flex items-center pt-10 gap-4 pr-20">
            <h2
              className="px-8 py-3 text-white"
              initial={{ opacity: 0, y: 100 }}
            >
              Scroll down
            </h2>
            <Lottie className="w-[40px]" animationData={Scroll} />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
