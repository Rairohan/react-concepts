import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Card(){
    const value = useContext(ThemeContext)
    return(
        <div>
            <div style={{backgroundColor: value.theme === "dark" ? "#333" : "#eee"}}>
                <h1>Card title</h1>
            </div>
        </div>
    )
}