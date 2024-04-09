import './App.css';
import Heading from "./Heading";
import Intro1 from "./components/Intro1";
import Header from "./components/Header1"
import Footer from './components/Footer';
import Button from './components/Button';
import DangerButton from './components/DangerButton';
import Main from './components/Main';
import Promo from './components/promo1';
import Aside from './components/Aside';
import Section from './components/Section';
import Logo from './components/Logo'

const bool = true; 
const str1 = "It is just";

function App() {
  return (
    <div className="App">
      <Logo />
        This is the starting code for Your first component ungraded lab
        <Heading firstName="Mabruk" />        
        <Main >{/* parent */}
         <Intro1 /> {/* child */}
          <Header name="john" color="purple" />
        </Main>      
        <Heading firstName="David" />
        <Button />
        <Promo heading="You have 20% discount" />
        <Promo promoSubHeading="Buy 1 get one free" />
        <Heading firstName="Inkum" />
        <DangerButton />
        <Aside name="David Kofi Inkum" />
        <Footer /> 
        <Section 
        toggleBoolean={!bool}
        math={(10 + 50)/3}
        str={str1 + ' another ' + 'string'}
        />
    </div>
   
  );
}

export default App;
