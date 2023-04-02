import Navbar from './components/navbar'
import Home from "./components/home/home";
import About from "./components/about";
import Timeline from "./components/timeline/timeline";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Timeline/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
