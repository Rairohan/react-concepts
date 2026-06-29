import useLocalStorage from "./useLocalStorage";
export default function NameInput(){
    const {value,setValue} = useLocalStorage()
    return(
        <div>
            <input
             type="text" 
             value={value}
             placeholder="Enter name ..."
             onChange={(e)=>{setValue(e.target.value)}}
            />
            <p>New Name : {value}</p>
        </div>
    )

}