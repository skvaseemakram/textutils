import React, { useState } from 'react'
import NavBar from './components/Navbar';
import drop from "./drop.css"
export default function App() {
    const [Text,setText] = useState("")
    const [Style,setStyle] = useState("")
    const handleOnChange =(event)=>{
        setText(event.target.value);
        // console.log(Text.toUpperCase);
    }
    const handleOnClick = ()=>{
        console.log("to upper");
        setText(Text.toUpperCase());
    }
    const handleloClick = ()=>{
        setText(Text.toLowerCase())
    }
    const handleclClick =()=>{
        setText("")
    }

      
    
    const changeFive =()=>{
        setText(setStyle("five"))
    }
    // const prom = prompt('')
  return (
    <div>
        <NavBar title="Text-Utils" />
        {/* <h1>hello {prom}</h1> */}
        <div className="container my-3">
        <label for="exampleFormControlTextarea1" className="form-label"><h4>Enter Your Text Below</h4> </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleOnChange} rows="8"></textarea>
      <button type="button" className="btn btn-primary my-2 mx-2"  onClick={handleOnClick}>UpperCase</button>
      <button type="button" className="btn btn-primary my-2" onClick={handleloClick} >LowerCase</button>
      <button type="button" className="btn btn-dark my-2 mx-2" onClick={handleclClick} >Clear</button>
      <pre>{Text.split(" ").length} <b>Words</b>, {Text.length} <b>Charactors</b></pre>

      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={changeFive} href="#">Action</a></li>
    <li><a className="dropdown-item"  href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
    </div>
  )
}
