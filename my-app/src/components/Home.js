import "../App.css";
import React from "react";
import Main from "./Main";
import Card from "./Card";
import Footer from "./Footer";
import Promo from "./Promo";
import MultiMedia from "./MultiMedia";
import Sound from "./Sound";

function Home() {
    return(
        <div>
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
            <MultiMedia />
            </div>
            <div> 
                <Sound />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;