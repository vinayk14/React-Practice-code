import React , {useState, useEffect} from "react";
import {createRoot} from "react-dom/client"

function Password(){
 const [Password,setPassword] = useState("qytytrj2jj")
 const [length, setLength] = useState(10)
 const [numberChanged, setnumberChanged] = useState(false)
 const [charChanged, setcharChanged] = useState(false)


 function generatepassword(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberChanged){
        str += "0123456789"
    }
    if(charChanged){
        str += "@#$&*!?%"
    }
    let pass =""

    for(let i=0; i<=length; i++){
        pass += str[Math.floor(Math.random()*str.length)]
    }

    setPassword(pass)
 }

 useEffect(()=>{
    generatepassword()
 },[length, numberChanged, charChanged])

 return(
    <>
      <h1>{Password}</h1>
      <div className="second">
        
        <input type="range"  min={5} max={25} value={length} onChange={(e)=> setLength(e.target.value)}/>
        <label>Length ({length})</label>

        <input type="checkbox" defaultChecked={numberChanged}  onChange={()=> setnumberChanged(!numberChanged)}/>
        <label>Number</label>
            <input type="checkbox" defaultChecked={charChanged} onChange={()=> setcharChanged(!charChanged)}/>
        <label>Character</label>
      </div>
    </>
 )
}

export default Password