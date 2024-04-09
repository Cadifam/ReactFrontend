import React from "react";
function Header(props){
    return(
        // it is picking attribute(props.name) and (props.color) from App.js
        <h1>
            Hello there indeed, my name is {props.name}, i like the colour {props.color}
        </h1>
    )
}
export default Header;