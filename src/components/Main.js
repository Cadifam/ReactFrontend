import React from "react";

function Main(props){
    const varStyle = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px"
    }
    return (
        <div style={varStyle}>
            {props.children}
        </div>
    )
}

export default Main;