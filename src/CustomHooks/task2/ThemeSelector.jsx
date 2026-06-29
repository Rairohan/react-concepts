import useToggle from "./useToogle";
export default function ThemeSelector(){
    const {value,toggle} = useToggle()
    return(
        <div>
            <p>Theme Selector</p>
            <p>{value}</p>
            <button onClick={toggle}>{value ? "On" : "OFF"}</button>
        </div>
    )
}