import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Body(){
    const [income,setIncome] = useState(0)
    const [house,setHouse] = useState(0)
    const [food,setFood] = useState(0)
    const [transport,setTransport] = useState(0)
    const [saving,setSaving] = useState(0)

    const totalExpense = Number(food) + Number(house) + Number(transport) + Number(saving)
    const remainingBalance = income>0 ? "₹ " + (income - totalExpense) :0
    const budgetUsages = income>0 ?((totalExpense/income)*100).toFixed(1) + "%" : 0
  return(
    <div id="container">
        <h1 id="title">Smart Budget Calculator </h1>
        <h4 id="subtitle">Take control of your financial futur</h4>
        <div id="maindiv">
        <div id="income">
            <h2>Monthly Income</h2>
            <h5>Adjust your monthly earning</h5>
            <input type="range" min={0}  value={income} max={50000} onChange={(e)=> setIncome(e.target.value) } />
            <label>Income: {income} / month</label>
        </div>
        </div>
        <div id="seconddiv">
              <div className="expances-card">
            <h2>Food</h2>
            <h5>Adjust your monthly earning</h5>
            <input type="range" min={0} max={5000} value={food} onChange={(e)=> setFood(e.target.value) }  />
            <label>Food: {food}</label>
        </div>
          <div className="expances-card">
            <h2>Transport</h2>
            <h5>Adjust your monthly earning</h5>
            <input type="range" min={0} max={5000} value={transport} onChange={(e)=> setTransport(e.target.value) }/>
            <label>Transport: {transport} </label>
        </div>
         <div className="expances-card">
            <h2>Housing</h2>
            <h5>Adjust your monthly earning</h5>
            <input type="range" min={0} max={5000}  value={house} onChange={(e)=> setHouse(e.target.value)}/>
            <label>House: {house} </label>
        </div>
         <div className="expances-card">
            <h2>Saving</h2>
            <h5>Adjust your monthly earning</h5>
            <input type="range" min={0} max={10000} value={saving} onChange={(e)=> setSaving(e.target.value)} />
            <label>Saving: {saving}</label>
        </div>
        </div>

        <div className="total-expenses">
            <h2>Budget Summary</h2>
            <h5>Track your spending</h5>
            <div id="budget-usages">
            <h5>Budget Usages</h5>
            <h5>{budgetUsages}</h5>
            </div>
            <h3 id="remaining-balance">
                Remaining Balance : {remainingBalance}
            </h3>

        </div>
    </div>
  )
}

export default Body