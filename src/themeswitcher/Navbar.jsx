import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navbar(){
const value = useContext(ThemeContext)
return(
    <div>
        <button onClick={()=>{value.dispatch({type:"toggle"})}}>Toggle</button>
    </div>
)
}