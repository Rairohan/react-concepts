import { createContext, useContext,useReducer } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
export const ThemeContext = createContext();
export function reducer(state,action){
    switch(action.type){
        case "toggle": return state === "light" ? "dark" : "light"
        default: return  state
    }
}
export function ThemeProvider({children}){
    const[theme,dispatch]= useReducer(reducer,"light")
    return(
        <div>
            <ThemeContext.Provider value={{theme,dispatch}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}