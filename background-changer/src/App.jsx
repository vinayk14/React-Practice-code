import React, { useState} from "react";
import { createRoot } from "react-dom/client";


function App(){
  const [color,setColor] = useState("black")
  document.body.style.backgroundColor = color
  return(
    <div className="appDiv">
      <h1>Background Changer</h1>
      <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
      <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
      <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
      <button style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
      <button style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}}>Purple</button>
    </div>
  )
}

export default App