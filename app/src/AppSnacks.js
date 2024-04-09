import "./App.css"
import SnacksList from "./component/Snacks";

const desserts = [
    {
      name: "Sobolo and broke-man",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Kelewele",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Roasted Corn",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Plaintain Chips",
      calories: 600,
      createdAt: "2022-01-04",
    },
    {
      name: "Burger",
      calories: 700,
      createdAt: "2022-01-05",
    },   
  ];

  function App() {
    // const listItems = desserts.map(desserts =>{
    //     const itemdesserts = `${desserts.name} - ${desserts.calories} Date- ${desserts.createdAt}`
    //     return <l1>{itemdesserts}</l1>})

        return (
          <div className="App">
            <h2>List of Low calories snacks</h2>
            < SnacksList data={desserts}/>
            
          </div>
            // <div>
            //     <h1> List of top desserts in Bolgatanga</h1>
            //     <ul>{listItems}</ul>
            // </div>
        );

    }
  
    export default App;