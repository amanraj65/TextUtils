import React ,{useState} from 'react';
const TextForms = (props) => {
    
  

    const[text,setText] = useState("Enter text");

    const handleUpClick = ()=>{
        console.log("Uppercase clicked");
    }


    return(
         <form>
     <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">{props.input1}</label>
    <textarea type="text-area" rows={8} value={text} className="form-control" id="exampleInputEmail1"/>

  </div>
  <button type="submit" className="btn btn-primary" onClick={handleUpClick}>{props.btntext}</button>
</form>
)
}

export default TextForms;