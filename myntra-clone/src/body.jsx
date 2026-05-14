import React, { useState }  from "react";
import { createRoot } from "react-dom/client";
import Card from "./cards";
import arr from "./arrData";

function Body(){
     let [A,setA] = useState(arr)

    function sortbyprice(){
      A.sort((a,b) => a.price - b.price)
      setA([...A])
    }

    function above499(){
      const B = arr.filter((val) => val.price>499)
      setA(B)
    }
  return(
      <div>
      <div>
        <button onClick={sortbyprice}>Sort by Price</button>
        <button onClick={above499}> Above Rs 499</button>
      </div>
       <div className="body">
        {/* <Card clothes="T-shirts" offer="50-80% OFF"/>
        <Card clothes="Shirts" offer="40-80% OFF"/>
        <Card clothes="Pants" offer="50-70% OFF"/>
        <Card clothes="Trousers" offer="20-50% OFF"/>
        <Card clothes="Kurtas" offer="30-50% OFF"/>
        <Card clothes="Shoes" offer="50-70% OFF"/>
        <Card clothes="Suits" offer="60-80% OFF"/> 
        <Card clothes="Sport Wear" offer="60-80% OFF"/> 
        <Card clothes="Suits" offer="60-80% OFF"/>
        <Card clothes="Formal Shoes" offer="40-80% OFF"/>
        <Card clothes="Suits" offer="60-80% OFF"/>
        <Card clothes="Suits" offer="40-80% OFF"/> */}

                {/* OR SEND ARGUMENT THROUGH map */}
        {A.map((value,index)=><Card key={index} clothes={value.clothes} offer={value.offer} price={value.price}/>)}
      </div>
      </div>
      
    )
}


export default Body