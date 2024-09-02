import React, {useState} from 'react';

const TextForms = (props) => {
    
    const[text,setText]= useState("Enter text here ");

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newtxt = text.toUpperCase(); 
        setText(newtxt); 
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea rows="8" value={text} onChange={handleOnChange} className="form-control"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>{props.buttonname}</button>
        </div>
)
}
export default TextForms;