import React, { use, useState } from "react";

function App(){
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [val, setVal]= useState("")

    function BmiCalc(){
    console.log("i am running")
    let Bmi = Number(weight / (height*height))

    setVal(Bmi)
    console.log(Bmi)
    
  } 
  return(

      <div>
      <h1>BMI Calculator Window</h1>
     <label> Weight : <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)}/> </label>
      <label>Height :<input type="number" value={height} onChange={(e)=> setHeight(e.target.value)}/> </label>
      <button onClick={BmiCalc}>Submit</button>
       {/* <h1>Your BMI is :{val}</h1> */}
      { !isNaN(val) && val !== "" ? (
      <h3>
        { val < 18.5
         ? `Your BMI is ${val} - UnderWeight`
         : val < 25 
         ? `Your BMI is ${val} - Healthy Weight`
         : val < 30
         ? `Your BMI is ${val} - OverWeight`
         :`Your BMI is ${val} - Obese`}
      </h3>
    ) : null}
    </div>
  )
// BMI Categories (Adults)
// Below 18.5: Underweight
// 18.5–24.9: Healthy weight
// 25.0–29.9: Overweight
// 30.0 or higher: Obesity

}

export default App
