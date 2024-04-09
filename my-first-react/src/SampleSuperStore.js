import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer"
import Promo from "./components/Promo";
// import Promo from "./components/Promo";

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
       <>
        <Promo />
       </> 
        <div className="App-main">
            <Main>
                <Card h2="Laptops" h3="We have various laptop brands" />
                <Card h2="Airpods" h3="Best bass airpods on the market" />
                <Card h2="home Aplliances" h3="Your stop shop for your electronic needs" />
                <Card h2="Smart Devices" h3="smart Watches and others" />
            </Main>
        </div>
        <div>
            <Footer></Footer>
        </div>
    
    </div>
  );
}

export default App;
