import Navbar from './components/navbar'
import Home from "./components/home";
import About from "./components/about";
import Support from "./components/support";
import Platform from "./components/platform";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Support/>
        <Platform/>
        <Pricing/>
        <Footer/>
    </>
  );
}

export default App;
