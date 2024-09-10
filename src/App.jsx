import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Nav } from "./components/Navbar"
import { SmallNav } from "./components/SmallNav"
import Work from "./components/Work"
import Projects from "./components/Projects"


function App() {
  return <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased  slec selction:bg-gray-400 selection:text-bg-gray" >
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-slate-900"></div>
    </div>
    <div className="hidden md:block lg:block mb-20"><Nav></Nav></div>
    <div className="block md:hidden lg:hidden mb-20"><SmallNav></SmallNav></div>
    <Hero></Hero>
     <About></About>
    <Work></Work>
    <Projects></Projects>
    <Footer></Footer> 
    
  </div>

}

export default App