import React ,{useState} from 'react'

export default function Txtform(props) {
  const Upclick = () =>{
    console.log("upper case was pressed");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const lowclick = () =>{
    console.log("upper case was pressed");
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  //copying fxn
  const handlecopy = () =>{
    let copiedtext = text;
     navigator.clipboard.writeText(copiedtext);
  }
  //saving fxn
  const save = () => {
    let data = text;
    let c = document.createElement("a");
    c.download = "user-text.txt";
    
    let t = new Blob([data], {
    type: "text/plain"
    });
    c.href = window.URL.createObjectURL(t);
    c.click();
    }
  const change_ev = (event) =>{
    console.log("Text changed");
    setText(event.target.value);
  }
  const[text , setText]= useState('');
    return (
     < > 
  <div className="container mb-3 xl">
    <h1 className={`text-${props.style==='light'?'dark':'light'}`}>{props.tsst}</h1>
    <textarea className="form-control" style={{backgroundColor: props.style ==='light'?'white':'grey' ,color: props.style ==='light'?'black':'white'}}  value={text} onChange={change_ev} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary mx-1 my-2" onClick={Upclick}>To Uppercase</button>
  <button className="btn btn-primary mx-1 my-2" onClick={lowclick}>To lowercase</button>
  <button className="btn btn-primary mx-1 my-2" onClick={save}>Download .txt file</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handlecopy}>Copy text</button>
  <div className="container my-3">
    <h1>Summary of text</h1>
    <p> {text.split(" ").length}  Words<br/>
        {text.length} Characters
    </p>
    <p> 
      Time required to read - {text.split(" ").length*0.008} minutes
    </p>
    <h2>
      Preview - <br/>
      </h2>
      <p>{text.length>0?text:"Enter Text To Preview"}</p>
    
  </div>
       </div>
       </ >
    )
}
