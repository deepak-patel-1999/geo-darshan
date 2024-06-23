import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Publications from './Components/Publications';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Tutorial from './Components/Tutorial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

