import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavMain from "./Components/NavMain";
import Projects from "./Components/Projects";
import Techs from "./Components/Techs";

function App() {
  return (
    <div>
          
      <div className="flex transition-all duration-200 bg-slate-800  flex-col  items-center ">
        <div className="w-[100%] mt-4 transition-all duration-200 bg-slate-700 rounded-t-md font-serif border-b-2 text-black lg:w-[80%]">
          <NavMain/>
        </div>
        <div className="w-[90%] bg-slate-700 text-black lg:w-[80%]">

          <Home />
          <About />
          <Projects/>
          <Techs/>
          <Contact />
          <Footer/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
