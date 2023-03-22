import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel/>}/>
        {/* <Route path="/card" element={<Card/>}/> */}
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
