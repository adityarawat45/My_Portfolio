import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Nav } from "./components/Navbar";
import { SmallNav } from "./components/SmallNav";
import Work from "./components/Work";
import Projects from "./components/Projects";

<div class=""></div>;
function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased  slec selction:bg-gray-400 selection:text-bg-gray">
      <div className="fixed top-0 -z-20 h-screen w-full">
        <div className="h-screen w-screen inset-0 bg-gradient-to-t from-slate-900 to-sky-950"></div>
      </div>
      <div className="sm:hidden mb-32">
        <Nav></Nav>
      </div>
      <div className="hidden sm:block  mb-20">
        <SmallNav></SmallNav>
      </div>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
