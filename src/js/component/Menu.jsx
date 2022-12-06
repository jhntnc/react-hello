import React from "react";

function Menu(props){
    return(<nav className="navbar bg-light">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">{props.start}</span>
    </div>
    
  </nav>);
};

export default Menu;