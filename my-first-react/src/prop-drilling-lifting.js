import React from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

function App() {

  const [fruits] = React.useState([
    { fruitName: "mango", id: 1 },
    { fruitName: "cashew", id: 2 },
    { fruitName: "watermelon", id: 3 },
    { fruitName: "pawpaw", id: 4 },
  ]);

  return (
    <div className="App">
      <h1>We have a variety of fruits</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter  fruits={fruits}/>
    </div>
  );
}

export default App;
