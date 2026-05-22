import { useReducer,useContext,createContext } from "react";
import Scoreboard from "./Scoreboard";
export const ScoreContext = createContext();
export function reducer(state,action){
    switch(action.type){
        case "increment":  
        const newScore = state.score + 1
        return{
            score:newScore,
            highScore: newScore > state.highScore ? newScore : state.highScore
        }
        case "decrement": return {...state,score:state.score > 0 ? state.score - 1 : 0}
        case "reset": return {score:0,highScore:0}
        default : return state
    }
}
export default function ScoreProvider({children}){
    const [score,dispatch] = useReducer(reducer,{score:0,highScore:0})
    return(
        <ScoreContext.Provider value={{score,dispatch}}>
            {children}
        </ScoreContext.Provider>
    )
}