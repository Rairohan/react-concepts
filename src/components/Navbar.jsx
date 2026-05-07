import { useContext } from "react";
import { ThemeContext } from "../App";
export default function Navbar(){
    const {theme} = useContext(ThemeContext)
    return(
        <div style={{ backgroundColor: theme === "dark" ? "black" : "white" }} >
            <h1>Navbar</h1>
        </div>
    )
}