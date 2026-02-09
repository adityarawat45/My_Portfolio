import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Nav } from "./components/Navbar"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Bottombar from "./components/Bottombar"

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-gray-400 selection:text-gray-900">

      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-950" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="hidden md:block md:mb-8">
        <Nav />
      </div>
      <div className="block md:hidden">
        <Bottombar />
      </div>

      {/* Sections */}
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="work"><Work /></div>

      <Projects />
      <Footer />
    </div>
  );
}

export default App;