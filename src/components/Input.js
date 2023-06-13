import React, {useState} from "react";
import "./Input.css"
import "./Calculate";
import Calculate from "./Calculate";

function Input(){

    const[click, setClick] = useState(false);
    const[salary, setSalary] = useState(0);
    const[saving, setSaving] = useState(0);
    const[cost, setCost] = useState(0);

    function handleClick()
    {
        setClick(true);
    }

    return(
        <div className="root">
            <div className="inputBox">
                <label for="annualSalary">
                    Annual Salary (Rs.):
                    <input type="text" placeholder= {salary} id="annualSalary" onChange={(e) => setSalary(e.target.value)}></input>
                </label>
                <br></br>
                <label for="savingPortion">
                    Saving Portion (%):
                    <input type="text" placeholder={saving} id="savingPortion" onChange={(e) => setSaving(e.target.value)}></input>
                </label>
                <br></br>
                <label for="totalCost">
                    Cost of the house Rs.:
                    <input type="text" placeholder={cost} id="totalCost" onChange={(e) => setCost(e.target.value)}></input>
                </label>
                <br></br>
                <button id="submit" className="subBtn" onClick={handleClick}>Submit</button>
                {click === true && <Calculate salary={salary} saving={saving} cost={cost}></Calculate>}
            </div>
        </div>
    )
}

export default Input;