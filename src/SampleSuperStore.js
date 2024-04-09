import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Promo from "./components/Promo";

function App() {
    return (
      <div className="App">
        <div>
            <Header />
        </div>
        <>
        <Promo />
        </>

        <div>          
            <Main >
                <Card h2="Laptops" h3="We have various laptop brands" />                           
            </Main>
            <Main>
                <Card h2="Airpods" h3="Best bass airpods on the market" />                
            </Main>
            <Main>                
                <Card h2="Home Appliances" h3="Your stop shop for your electronic needs" />                
            </Main>
            <Main>                
                <Card h2="Smart Devices" h3="smart watches and others" />
            </Main>
        </div>

        <div>
          <Promo />
        </div>

        <div>
            <Footer></Footer>
        </div>
      </div>
     
    );
  }
  
  export default App;