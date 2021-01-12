import React from "react";
import {Link} from "react-router-dom";

const Links = () => {
    const style = { 
      'list-style-type' : 'none'
  
    }
    return (
      <div>
        
        <div>
          <ul style = { style }>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/Mobile" >Mobile</Link>
            </li>
            <li>
              <Link to="/Laptop" >Laptop</Link>
            </li>
           
          </ul>
        </div>
      </div>
    );
  };
  export default Links;