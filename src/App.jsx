import About from "./Pages/About.jsx"
import Exp from "./Pages/Exp.jsx"
import Hero from "./Pages/Hero.jsx"
import Project from "./Components/Projectj.jsx"
import Footer from "./Components/Footer.jsx"


function App() {
  return (
   <>
<div className="bg-[#131313]">
   <div className="mx-auto w-[90%] flex flex-col justify-center items-center gap:20">
   <Hero />
   <About />
   <Exp />
   </div>
    <Project />
    <Footer />
   </div>
   </>
  )
}

export default App
