import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bmipic from './assets/bmi.jpg'
import './App.css'

function App() {
  
  const [height,setheight]=useState();
  console.log(height);
  const [weight,setweight]=useState();
  const [bmi,setbmi]=useState();
  const [status,setstatus]=useState();
  const [error,seterror]=useState();

  const heightset=(e)=>{
    
    return setheight(e.target.value);
    
  }
  const weightset=(e)=>{
    return setweight(e.target.value)
  }
  const bmicalculate=()=>{
    if(height && weight){
      const height1=height/100;
      const bmivalue=weight/(height1*height1);
      setbmi(bmivalue.toFixed(1));
      if(bmivalue<18.5){

        setstatus('Under Weight')
      }
      else if(bmivalue>18.5 && bmivalue<24.5){
        setstatus('Normal weight')

      }
      else if(bmivalue<24.5 && bmivalue>29){
        setstatus('over weight')

      }
      else{
        setstatus('obese')
      }


    }
    else{
      seterror('enter height and width')
      

    }
  };
 

  return (
    <>
      <div className="bmi-container">
        <div className="image-box">
          <img src={bmipic}></img>
        </div>
        <div className="input-box">
          <h1>BMI CALCULATOR</h1>
          <p className='error'>{error}</p>
          <div className="form-box">
            <label>Height in cm</label>
            <input type="text" id="height" value={height} onChange={heightset}></input>

          </div>
          <div className="form-box">
            <label>Weight in kg</label>
            <input type="text" id="weight" value={weight} onChange={weightset}></input>

          </div>
          <button type="submit" onClick={bmicalculate}>BMI</button>
          <button type="submit">Clear</button>
            {bmi !== null &&(
            <div className="result">
            <p>BMI Value: {bmi}</p>
            <p>BMI Status: {status}</p>
            </div>)}
          

        </div>
      </div>
    </>
  )
}

export default App
