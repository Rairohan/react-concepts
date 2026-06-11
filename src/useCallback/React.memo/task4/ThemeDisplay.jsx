import React from "react";
 const ThemeDisplay = React.memo(function ThemeDisplay ({theme,toggleTheme}){
    console.log("ThemeDisplay")
    return(
        <div>
            <p>{theme}</p>
            <button onClick={toggleTheme}>toggle theme ?</button>
        </div>
    )
})
export default ThemeDisplay