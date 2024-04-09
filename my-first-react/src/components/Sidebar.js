import React from "react";

function Sidebar() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
          <h1>Here is a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
}

export default Sidebar;
