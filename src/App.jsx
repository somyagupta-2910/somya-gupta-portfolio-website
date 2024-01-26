import "./App.css";

import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    // changes:
    // font - make it simpler
    // skills - define them in a better way
    // navbar navigation to each sectiom
    <div className="w-screen min-h-screen flex flex-col font-vietnam relative overflow-hidden">
        <HeroSection></HeroSection>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  );
}

export default App;
