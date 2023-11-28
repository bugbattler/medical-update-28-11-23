
import About from './Components/About';
import Courses from './Components/Courses';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Components/Services';
import './App.css';
import ServicesSec from './Components/ServicesSec';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/courses' element={<Courses />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/medical-codding-classes" element={<Services />} />
            <Route exact path="/online-medical-codding-classes" element={<ServicesSec />} />
          </Route>
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
