import React from "react";

function Main(props){

    // const varStyle = {
    //     padding: "20px",
    //     border: "1px solid gray",
    //     background: "#fff",
    //     margin: "20px"
    // }
    return(
        <div>
            <h1>Welcome to sample Super Store</h1>
            <div className="cards">
                {props.children}
            </div>
        </div>
        // <div style={varStyle}>
        
        
    )
}

export default Main;