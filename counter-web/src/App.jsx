import React from "react"
import { createRoot } from 'react-dom/client'
import { useState } from "react"




function App(){

    let [count,setCount] = useState(0)

    function increase(){
        count = count+1
        setCount(count)
    }

     function decrease(){
        if(count>0){
        count = count-1
        setCount(count)
        }else{
            count = 0
        }
    }
    return(
        <div className="counterdiv">
            <h1>Counter App</h1>
            <h2>Count is: {count}</h2>

            <button onClick={increase}>Inc</button>
            <button onClick={decrease}>Dec</button>
        </div>
    )
}

export default App