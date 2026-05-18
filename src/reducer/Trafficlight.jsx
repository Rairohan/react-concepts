import { useReducer } from "react";
function reducer(state,action){
    switch(action.type){
        case "next":
        switch(state){
            case "red": return "yellow"
            case "yellow": return "green"
            case "green": return "red"
            default : return state
        }
    }

}
export default function Trafficlight(){
    const [light,dispatch]=useReducer(reducer,"red")

    return(
        <div>
            <h1>Trafficlight</h1>
            <div style={{ 
                width: "100px", 
                height: "100px", 
                borderRadius: "50%", 
                backgroundColor: light 
                }}>
            </div>
            <button onClick={()=>{dispatch({type : "next"})}}>Next</button>
        </div>
    )
}