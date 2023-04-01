import Navbar from './components/navbar'
import Home from "./components/home";
import About from "./components/about";
import Timeline from "./components/timeline";
import Platform from "./components/platform";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Timeline/>
        <Platform/>
        <Pricing/>
        <Footer/>
    </>
  );
}

export default App;
