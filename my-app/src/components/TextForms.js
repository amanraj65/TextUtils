import React from 'react';
const TextForms = (props) => {
    return(
         <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">{props.input1}</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">{props.btntext}</button>
</form>
)
}

export default TextForms;