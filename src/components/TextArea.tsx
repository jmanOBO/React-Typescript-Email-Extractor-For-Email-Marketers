import { ChangeEvent, useCallback } from "react";
import useData from "../hooks/useData"


const TextArea = () => {
    const {state:{text,sort, seperator},dispatch}=useData();
    const calculateNumberOfEmails=useCallback(()=>{
        let regex;
        if(text){
            regex=/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g;
            const rmatch=text.match(regex);
            return rmatch===null?0:rmatch.length;
        }
        return 0;
    },[text])
    const handleReset=()=>{
     dispatch({type: "reset"});
    }
    const handleTextChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        const value=e.target.value;
        dispatch({type:"fillText",payload:value})
    }
    const handleCheckChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const checked=e.target.checked;
       dispatch({type: "sort",payload: checked.toString()})
    }
    const handleSelectChange=(e: ChangeEvent<HTMLSelectElement>)=>{
       const value=e.target.value;
       dispatch({type: "seperator",payload: value})
    }
    const handleExtract=()=>{
        dispatch({type: "extract"})
    }
  return (
    <div className="textarea">
        <textarea style={{width:700,height:400}} value={text} onChange={handleTextChange}>

        </textarea>

        <div className="actionArea">
        <div>
            <label>Seperator:</label>
            <select value={seperator} onChange={handleSelectChange}>
                <option value=",">Comma</option>
                <option value="n">New line</option>
                <option value="s">Semi colon</option>
            </select>
        </div>

        <div>
            <input type="checkbox" checked={sort} onChange={handleCheckChange}/>
            <label>Sort Alphabetically:</label>
             
        </div>
        </div>

        <div className="actionArea">
        <div>
          <button onClick={handleExtract}>Extract</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          <button>copy</button>
        </div>
        <div>
            <label>Email count:</label>
            <input type="text" value={calculateNumberOfEmails()}/>
            
             
        </div>
        </div>
    </div>
  )
}

export default TextArea