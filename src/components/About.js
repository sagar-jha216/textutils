import React, { useState } from 'react'

export default function About() {

    const [myStyle , setMyStyle] = useState({
        color: 'white' ,
        backgroundColor: 'black'
    });

    const[btnText , setBtnText]=useState("Enable Light Mode");

    const toggleStyle =()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black' ,
                backgroundColor: 'white'
            });
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color: 'white' ,
                backgroundColor: 'black'
            });
            setBtnText("Enable Light Mode");
        }

    }
  return (
    <div className="container" style={myStyle}>
      <>
        <h1>About Uses</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Efficient Text Manipulation
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is designed to help users easily perform various text operations like word count, case conversion, and text formatting, all within a simple and intuitive interface.
            </div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                User-Friendly Interface
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Our tool focuses on providing a seamless experience for users, allowing quick access to text editing features without the need for complex software.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Time-Saving Solution
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Whether you need to adjust your text for readability or format it for professional purposes, TextUtils helps you accomplish these tasks faster and more efficiently.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-2">
        <button type="button" onClick={toggleStyle} className="btn btn-danger" >{btnText}</button>
        
        </div>
      </>
    </div>
  )
}
