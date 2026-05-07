import { createContext, useState } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css'
export const ThemeContext = createContext();

export default function App() {
const [isDark ,setIsDark]= useState(false)
const theme = isDark ? "dark" : "light" 
function toogleclick(){
  setIsDark(!isDark)
}
return(

  <ThemeContext.Provider value ={{theme,toogleclick}}>
    <Navbar/>
    <Card/>
    <button onClick={toogleclick}>Click</button>
  </ThemeContext.Provider>

)
}