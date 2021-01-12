import React from "react";
import {Link} from "react-router-dom";

const SideBarLapTop = () => {
    const style = { 
      'list-style-type' : 'none'
  
    }
    return (
      <div>
        
        <div>
          <ul style = { style }>
            <li>
              <Link to="/Hp" >Hp</Link>
            </li>
            <li>
              <Link to="/Dell" >Dell</Link>
            </li>
            <li>
              <Link to="/Apple" >Apple</Link>
            </li>
           
          </ul>
        </div>
      </div>
    );
  };
  export default SideBarLapTop;