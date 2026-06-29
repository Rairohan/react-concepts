import { useState } from "react";
export default function useLocalStorage(key,initialState){
    const stored = localStorage.getItem(key)
    const initial = stored ? JSON.parse(stored) : initialState

    const [value,setValue] = useState(initial)

    const updateValue = (newValue)=>{
        setValue(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))

    }
    return{value, setValue: updateValue}
}