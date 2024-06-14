import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full 
      rounded-none 
       shadow-lg shadow-black/[0.03] backdrop-blur-[0.05rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full bg-[#312f2f] bg-opacity-75 text-white
      border border-gray-400 border-opacity-60"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium 
        text-[0.9rem] text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {/* Home Link */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="flex w-full items-center justify-center px-3 py-3 text-white transition"
              onClick={() => {
                const element = document.getElementById("Home");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>
          </motion.li>

          {/* About Link */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="flex w-full items-center justify-center px-3 py-3 text-white transition"
              onClick={() => {
                const element = document.getElementById("About");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About
            </button>
          </motion.li>

          {/* Project Link */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="flex w-full items-center justify-center px-3 py-3 text-white transition"
              onClick={() => {
                const element = document.getElementById("Project");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Project
            </button>
          </motion.li>

          {/* Experice */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="flex w-full items-center justify-center px-3 py-3 text-white transition"
              onClick={() => {
                const element = document.getElementById("Experience");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Experience
            </button>
          </motion.li>

          {/* Contact Link */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="flex w-full items-center justify-center px-3 py-3 text-white transition"
              onClick={() => {
                const element = document.getElementById("Footer");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
