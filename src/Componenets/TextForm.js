import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newTe = text.toUpperCase();
        setText(newTe);
        props.showAlert("Converted to Upper case!","success")
    }
    
    const handleDoclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newTe = text.toLowerCase();
        setText(newTe);
        props.showAlert("Converted to Lower case!","success")
    }
    
    const handleClear = (event)=>{
        // console.log("On change")
        let newTe ='';
        setText(newTe);
        props.showAlert("Text cleared!","success")
    }

    const handlecopy = ()=>
    {
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success")
    }
    
    const handleOnchange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const handleExtraspace = (event)=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space cleared!","success")
    }

    const [text, setText] = useState('');
    // setText='ghjirgr'
  return (
    <>
    <div style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode ==='dark'?'rgb(0 25 45)':'white' ,
        color:props.mode ==='dark'?'white':'#042743'}} id="Mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Upeercase</button>
        <button className="btn btn-primary mx-3" onClick={handleDoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraspace}>remove space</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} letters  </p>
        <p> {  0.008  *  text.split(" ").length} Minutes to read  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something"}</p>
    </div>
  </>
  )
}
