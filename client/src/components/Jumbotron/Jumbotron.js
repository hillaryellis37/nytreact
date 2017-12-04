import React from "react";

const Jumbotron = ({ children }) => 
	<div className="jumbotron" style={{backgroundColor: "#20315A", color: "white"}}>
      {children}
    </div>

export default Jumbotron;