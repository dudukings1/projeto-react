import { useState } from "react";


import "./sidebar.css";
import IconHover from "./funcoes/hover";
export function Sidebar() {
  const [mouseEmCima, setMouseEmCima] = useState(false);

  return (
    <div
      className="sidebar"
      onMouseEnter={() => setMouseEmCima(true)}
      onMouseLeave={() => setMouseEmCima(false)}
      style={{
        padding: "10px",
        transition: "all 0.4s ease-in-out",
        width: mouseEmCima ? "80px" : "40px",
      }}
    >
      <div className="icones">
        
      </div>
      <div className="icon-config">
      
      </div>
    </div>
  );
}

export default Sidebar;
