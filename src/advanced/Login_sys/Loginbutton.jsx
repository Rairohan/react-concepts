import { useContext } from "react";
import { AuthContext } from "../../App";
export default function Loginbutton(){
    const value = useContext(AuthContext)
    return(
        <div>
            {value.isLoggedIn 
                ? <button onClick={value.logout}>Logout</button>
                : <button onClick={value.login}>Login</button>
            }
        </div>
        )
}