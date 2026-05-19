import React, {useState} from "react";
import { useEffect } from "react";
import {createRoot} from "react-dom/client"
import Header from "./Header";
import Body from "./Body";

function App(){
    return(
    <div id="app">
        <Header/>
        <Body/>
    </div>
    )
}

export default App