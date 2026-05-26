import { useContext } from "react";
import { AuthContext } from "../../App";
export default function Dashboard(){
    const value = useContext(AuthContext)
    return(
        <div>
            <h1>{value.isLoggedIn ? "Dashboard Content" : "Please Login"}</h1>
        </div>
    )
}