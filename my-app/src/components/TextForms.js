import React, {useState} from 'react';

const TextForms = (props) => {

    let mystyle = {color : 'red',
        backgroundColor : 'cyan'
    }
    
    const[text,setText]= useState("");
    const[count,setCount] = useState(0);

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let upper = text.toUpperCase(); 
        setText(upper); 
    }

    const handleLoClick =() => {
        console.log("Lowercase was clicked");
        let lower = text.toLowerCase() ;
        setText(lower);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const cleartext = function(){
        setText("");
    }

 

    
    return(
        <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea rows="8" value={text} placeholder="Enter the text" onChange={handleOnChange} className="form-control"></textarea>
        </div>
        <button style={mystyle} className="btn btn-primary" onClick={handleUpClick}>{props.button1}</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>{props.button2}</button>
        <button className="btn btn-primary mx-1" onClick={cleartext}>{props.button3}</button>
        </div>
        <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{}</p>
        </div>
        </>
)
}
export default TextForms;