import React from "react";


function Card(props) {
    
    
    const clickHandler = () => {

        return (
            <style>
                background-color : #AAA;
            </style>
        );
        }
    return (
        <div className="card" onMouseOver={clickHandler}>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
);
}

export default Card;