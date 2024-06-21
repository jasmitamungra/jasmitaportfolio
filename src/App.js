import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About"
import Social from "./components/Social";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Social/>
       
      </div>
    </>
  );
}


export default App;