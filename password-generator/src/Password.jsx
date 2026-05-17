import React , {useState, useEffect} from "react";
import { useCallback } from "react";
import {createRoot} from "react-dom/client"

function Password(){
 const [Password,setPassword] = useState("qytytrj2jj")
 const [length, setLength] = useState(10)
 const [numberChanged, setnumberChanged] = useState(false)
 const [charChanged, setcharChanged] = useState(false)

 //Optamized code and control to creatation of new memory useing useCallback
 const generatepassword = useCallback(()=>{
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
    },[length, numberChanged, charChanged])

     //useEffect use for blocked unneccesory rendering

 useEffect(()=>{
    generatepassword()
 },[generatepassword])

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