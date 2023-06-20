import React,{useState} from 'react'
export default function TextForm(props) {
   const toupper=()=>{
          console.log("The uppercase function is fired "+text);
          let newText=text.toUpperCase();
          setText(newText)
    }
   const tolower=()=>{
          console.log("The lowercase function is fired "+text);
          let newText=text.toLowerCase();
          setText(newText)
    }
   const toclear=()=>{
          console.log("The lowercase function is fired "+text);
          let newText='';
          setText(newText)
    }
  const handleonchange=(event)=>{
          console.log("OnChange is fired");
          setText(event.target.value)
    }
  const handlecopy=()=>{
          console.log("The copy function is fired");
          var text=document.getElementById("Box");
          text.select();
          navigator.clipboard.writeText(text.value);
    }
    const removeextraspaces=()=>{
      console.log("Extraspaces are removed");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
}
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h3>{props.heading}</h3>
     <div className="mb-3">
       <textarea className="form-control" id="Box" rows="8" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={toupper}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-2" onClick={tolower}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-2" onClick={toclear}>Clear</button>
     <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy</button>
     <button className="btn btn-primary mx-2 my-2" onClick={removeextraspaces}>Remove Extraspaces</button>
</div>
<div className="conatiner my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h4>Your World Count</h4>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>time required to read the text : {0.008*text.split(" ").length}</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter your text in above textbox to preview here"}</p>
</div>
</>
  )
}

