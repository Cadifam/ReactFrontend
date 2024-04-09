import "./App.css";
// import React from 'react';
import Heading from "./Heading";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import Button from "./components/Button";
// import DangerButton from "./components/DangerButton";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Footer from "./components/Footer";
import Promo1 from "./components/Promo1";
// import Aside from "./components/Aside";
import Section from "./components/Section";
import Logo from "./components/Logo";

const bool = false;
const str1 = "just";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header name="john" color="purple" />
      <Heading firstName="songtaa" />

      <Logo desc="github logo" />
      {/* <Button /> */}
      <Promo1 heading="You have 50% discount" />
      <Promo1 promo1SubHeading="Buy 1 get one free" />
      <Main>
        {/* {" "} */}
        {/* parent */}
        <Intro1 /> {/* child */}
        <Intro2 /> {/* child */}
        <Sidebar />
      </Main>

      <Section
        toggleBoolean={!bool}
        math={(10 * 20) / 3}
        str={str1 + " another " + "string"}
      />
      {/* <Heading firstName="hermas" /> */}
      {/* <Aside name="Songtaa"/> */}
      {/* <DangerButton /> */}

      <Promo1 heading="You have 20% discount" />

      <Footer />
      {/* This is the starting code for Your first component ungraded lab  */}
      {/* <Heading /> */}
    </div>
  );
}

export default App;
