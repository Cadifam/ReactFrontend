import './App.css';
import Card from './components/Card';
import Main from './components/Main';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <h1>"Task: Add three card elements".</h1>    
       <Main >
       <h2>< Card h2="First card's h2" />
       < Card h3="First card's h3"/>
       <Event />
       </h2>             
        </Main>

        <Main >       
       <h3>
       < Card h2="Second card's h2" />
       < Card h3="Second card's h3"/>
       </h3>
        </Main>

        <Main >
        <h2>< Card h2="Third card's h2" />
       < Card h3="Third card's h3"/>
       </h2>       
        </Main>
      
    </div>
   
  );
}

export default App;
