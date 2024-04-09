import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom'
import RegistrationForm from "./components/RegistrationForm";
import ButtonReg from "./components/ButtonReg";

// import Promo from "./components/Promo";

function App() {
  return (
    <div className="App">
        <div>
            <Header />
            <ButtonReg />
        </div>

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About Us" element={<AboutUs />} />
                <Route path="/Contact" element={<Contact Us />} />
                <Route path="/Articles" element={<Articles />} />
                <Route path="/RegistrationForm" element={<RegistrationForm />} />
            </Routes>
        </div> 
    </div>
  );
}

export default App;
