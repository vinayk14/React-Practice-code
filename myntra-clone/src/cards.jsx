import React from "react";
import { createRoot } from "react-dom/client";


function Card (props){
    return(
        <div className="card">
            <img src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/af63de21-b339-4fe0-8636-306806934261/PANDA+DUNK+GRAPHIC+TEE.png" alt="tshirt child"  height="200px" width="200px" />
            <div  style={{textAlign:"center", color:"white"}}>
            <h2>{props.clothes}</h2>
            <h1>{props.offer}</h1>
             <h1>Price: {props.price}</h1>
            <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card