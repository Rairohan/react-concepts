import { LanguageContext } from "../App";
import { useContext } from "react";
export default function Header(){
    const value = useContext(LanguageContext)
    return(
        <h2>
            {value.lang === "en" ? "Goodbye" : "अलविदा"}
        </h2>
    )
}