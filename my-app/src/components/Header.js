import React from "react";
// import PropTypes from 'prop-types';
import Nav from './Nav';

function Header() {
  // console.log(props);
  return (
    <div className="App-header">
      <h1 id="nav-title">SampleSuperStore</h1>
      <Nav />
      
    </div>

  );
}

export default Header;
