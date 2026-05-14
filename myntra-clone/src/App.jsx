import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Body from "./body";
import Header from "./Header";
import Footer from "./Footer";
import arr from "./arrData";
import "./App.css";
import Card from "./cards"





function App(){
  return(
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App