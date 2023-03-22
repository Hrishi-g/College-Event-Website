import About from "./components/About";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar />
      <Carousel />
      <About/>
      <Contact/>
      <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
