import Navbar from './components/navbar'
import Hero from "./components/hero";
import About from "./components/about";
import Support from "./components/support";
import AllInOne from "./components/all-in-one";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Support/>
        <AllInOne/>
        <Pricing/>
        <Footer/>
    </>
  );
}

export default App;
