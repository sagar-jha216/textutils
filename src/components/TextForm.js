//wrtie rfc to make a return function

import React,{useState} from 'react'

export default function TexthtmlForm(props) {
    const handleUpClick = () => {
      console.log("Upper Case will be clicked");
      let newText=text.toUpperCase();
      setText(newText);
    }

    const handleLowClick = () => {
      console.log("Lower Case will be clicked");
      let newText=text.toLowerCase();
      setText(newText);
    }

    const handleOnChange = (event) => {
      console.log("Text will be changed");
      setText(event.target.value);
    }
    
    const handleClearClick = () => {
      setText("");
    }

    const handleEmailClick = () => {
      let emailregex= /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;  // Global flag for multiple matches
      let extractedemail = text.match(emailregex) || []; // Match all emails or return an empty array if none found
      if (extractedemail.length === 0) {
        setText("No emails found"); // Handle case when no emails are found
      } else {
        setText(extractedemail.join(", ")); // Join the emails with commas if multiple are found
      }
    }

    const handleCopyClick=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Succesfully Copied","success");
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">My Text Area</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox"  rows="8"></textarea> 
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All Text</button>
      <button className="btn btn-primary mx-2" onClick={handleEmailClick}>Extract Email</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy the Text</button>



    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Summary of your text : </h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes take to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to Preview"}</p>
    </div>
     
    </>
  )
}
