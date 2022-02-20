import React, {useState} from 'react';

export default function Upcase(props) {
    document.title="Rk Avenue - Home";
    const resetOn = ()=>{
        setText("");
        props.showAlert("Text is cleared","success");
    }
    const handleUpCase = ()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Text Change to UPPER case is successfully convert","success");
    }
    
    const handleLoCase = ()=>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Text Change to lower case is successfully convert","success");
    }

   const Changestring = (redas)=> {
        console.log("On change button clicked . . .");
       setText(redas.target.value);
       
        
    }
   const [text, setText] = useState("Enter The value");
    return (
        <div className="container mx-8">     
                 
<div className="container " style={{color : props.mode==='light'?'grey':'white'}}>
    <h1> Comment</h1>
  <textarea className="form-control my-15" value={text} onChange={Changestring} style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<div className="container my-2">
<button className="btn btn-primary mx-1"  onClick={handleUpCase}>Change Upper case</button>
<button className="btn btn-primary mx-1"  onClick={handleLoCase}>Change Lower case</button>
<button className="btn btn-primary mx-2" onClick={resetOn}>Reset</button>
</div>
<div className="container ny-8" style={{color : props.mode==='light'?'grey':'white'}}>
    <h3>
        Summery
    </h3>
    <p>Word available in your comment {text.split(" ").length} and Character avaiblable in your comment {text.length}</p>
    <p>{0.008 * text.split(" ").length}min Reading time</p>
    <h3>
        Preview
    </h3>
    <p>{text}</p>
    
</div>
        </div>
        
    )
}
