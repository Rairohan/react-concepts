import { createContext, use, useReducer, useState } from 'react'
// --------------Task 1------------------
// import Navbar from './useContext/task1/Navbar';
// import Card from './useContext/task1/Card';
// import './App.css'
// export const ThemeContext = createContext();

// export default function App() {
// const [isDark ,setIsDark]= useState(false)
// const theme = isDark ? "dark" : "light" 
// function toogleclick(){
//   setIsDark(!isDark)
// }
// return(

//   <ThemeContext.Provider value ={{theme,toogleclick}}>
//     <Navbar/>
//     <Card/>
//     <button onClick={toogleclick}>Click</button>
//   </ThemeContext.Provider>

// )
// }
// --------------Task 2------------------
// import Nav from "./useContext/task2/Nav";
// import Sidebar from "./useContext/task2/Sidebar"
// export const UserContext = createContext();

// export default function App(){
//   const user = {name:"Rohan",role:"IT"}
//   return(
//     <UserContext.Provider value = {user}>
//       <Nav/>
//       <Sidebar/>
//     </UserContext.Provider>
//   )
// }

// --------------Task 3------------------
// import Header from "./useContext/task3/Header";
// import Footer from "./useContext/task3/Footer";
// export const LanguageContext = createContext();
// export default function App()
// {
//   const [lang,setLang] = useState("en")
 
//   function toggle(){
//     setLang(lang ==="en" ? "np" : "en")
//   }
 
//   return(
//       <LanguageContext.Provider value={{ lang, toggle }}>
//       <Header/>
//       <Footer/>
//       <button onClick={toggle}>
//         Switch Language
//       </button>
//     </LanguageContext.Provider>
//   )
// }
// --------------Task 4------------------
// import Nbar from "./useContext/task4/Nbar";
// import Productcard from "./useContext/task4/Productcard";
// import CartSummary from "./useContext/task4/CartSummary";  
// export const CountContext = createContext();
// export default function App(){
//   const [count,setCount] = useState(0);
//   function addtocart(){
//     setCount(count+1)
//   }
//   function remove(){
//     setCount(count>0 ? count-1 : 0)
//   }
// return(
//   <CountContext.Provider value={{count, addtocart,remove}}>
//     <Nbar/>
//     <Productcard/>
//     <CartSummary/>
//   </CountContext.Provider>
// )
// }
// --------------Login system------------------
// import Dashboard from './advancedLogin_sys/Dashboard';
// import Navbar from './advanced/Login_sys/Navbar';
// import Loginbutton from './advanced/Login_sys/Loginbutton';
// export const AuthContext = createContext();
// export default function App(){
//   const [isLoggedIn,setIsLoggedIn] = useState(false)
//   const [user,setUser] =useState(null)
//     function login(){
//       setIsLoggedIn(true)
//       setUser({name : "rohan"})
//     }
//     function logout(){
//       setIsLoggedIn(false)
//       setUser(null)
//     }
//     return( 
//       <AuthContext.Provider value ={{login,logout,user,isLoggedIn}}>
//         <Dashboard/>
//         <Navbar/>
//         <Loginbutton/>
//       </AuthContext.Provider>
//     )


// }
// --------------Notification-sys----------------------
// import Notification from './advanced/Notification_sys/Notification';
// export const NotifContext = createContext();
// export default function App(){
//   const [notif,setNotif] = useState({message:"",type:""})
//   return(
//     <NotifContext.Provider value={notif}>
//       <button onClick={()=>setNotif({message:"File saved",type:"success"})}>File saved</button>
//       <button onClick={()=>setNotif({message:"Something went wrong",type:"error"})}>something went wrong</button>
//       <button onClick={()=>setNotif({message:"Low storage",type:"warning"})}>low storage</button>
//       <Notification/>
//     </NotifContext.Provider>
//   )
// }

// --------------Reducer-eg----------------------
// import Cartcounter from './useReducer/reducer/Cartcounter';
// import Trafficlight from './useReducer/reducer/Trafficlight'
// import Texteditor from './useReducer/reducer/Texteditor'
// import Todo from './useReducer/reducer/Todo'
// import Banking from './useReducer/reducer/Banking'
// export default function App(){
 
//   return(
//    <Banking/>
//   )
// }

// --------------theme-switcher----------------------

// import {ThemeProvider} from "./useContext/themeswitcher/ThemeContext"
// import Navbar from "./useContext/themeswitcher/Navbar";
// import Card from "./useContext/themeswitcher/Card";  
// export default function App() {
//   return (
//     <ThemeProvider>
//       <Navbar/>
//       <Card/>
//     </ThemeProvider>
//   )
// }

// --------------theme-switcher----------------------
// import ScoreProvider from './advanced/score_counter/ScoreContext'
// import { ScoreContext } from './advanced/score_counter/ScoreContext'
// import Scoreboard from './advanced/score_counter/Scoreboard'
// export default function App(){
//   return(
//     <div>
//         <ScoreProvider>
//           <Scoreboard/>
//         </ScoreProvider>
//     </div>
//   )
// }

//---------------useMemo----------------
// import ExpenseCalculator from './useMemo/ExpenseCalculator'
// import NameFilter from './useMemo/NameFilter'
// import ShoppingCart from './useMemo/ShoppingCart'

//---------------useCallback----------------
import ButtonHandler from './useCallback/ButtonHandler'
import SearchHandler from './useCallback/SearchHandler'
// import Parent from './useCallback/React.memo/task1/Parent'
// import Parent from './useCallback/React.memo/task2/Parent'
import Parent from './useCallback/React.memo/task3/Parent'
export default function App(){
    return(
        <Parent/>
    )
}