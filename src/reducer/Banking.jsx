import { useReducer, useState } from "react";
function reducer(state,action){
        switch(action.type){
            case "deposit" : return state + action.payload
            case "withdraw": return state > 0 ? state - action.payload : state
            case "reset": return 1000
            default : return state
        }
    }
export default function Banking(){
    const[balance,dispatch]=useReducer(reducer,1000)
    const[amount,setAmount]= useState("")
    return(
        <div>
            <input type="text"  onChange={(e)=> setAmount(e.target.value)} />
            <p>{balance}</p>
            <button onClick={()=>dispatch({type: "deposit",payload: Number(amount)})}>Deposit</button>
            <button onClick={()=>{dispatch({type:"withdraw",payload: Number(amount)})}}>Withdraw</button>
            <button onClick={()=>{dispatch ({type:"reset"})}}>Reset</button>
        </div>
    )

}