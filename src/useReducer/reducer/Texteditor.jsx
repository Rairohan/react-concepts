import { useReducer } from "react";
function reducer(state,action){
   
    switch(action.type){
        case "type": return action.payload
        case "Uppercase" : return state.toUpperCase()
        case "Lowercase" : return state.toLowerCase()
        case "Clear" : return ""
        default: return state
    }

}
export default function Texteditor(){
    const [word,dispatch] = useReducer(reducer,"")
    return(
        <div>
           <textarea value={word} onChange={(e)=> dispatch({type:"type", payload: e.target.value })}></textarea>
           <button onClick={()=>dispatch({type : "Uppercase"})}>Uppercase</button>
           <button onClick={()=>dispatch({type : "Lowercase"})}>Lowercase</button>
           <button onClick={()=>dispatch({type : "Clear"})}>Clear</button>
        </div>
    )
}