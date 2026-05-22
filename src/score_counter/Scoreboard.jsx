import { useReducer,useContext } from "react";
import { ScoreContext } from "./ScoreContext";
export default function Scoreboard(){
    const value = useContext(ScoreContext)
    return(
        <div>
            <h1>{value.score.score}</h1>
            <h2>{value.score.highScore}</h2>
            <button onClick={()=>{value.dispatch({type :"increment"})}}>increment</button>
            <button onClick={()=>{value.dispatch({type:"decrement"})}}>decrement</button>
            <button onClick={()=>{value.dispatch({type:"reset"})}}>reset</button>
        </div>
    )
}