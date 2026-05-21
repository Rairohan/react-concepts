import { createContext, use, useReducer, useState } from 'react'
// --------------Task 1------------------
// import Navbar from './components/Navbar';
// import Card from './components/Card';
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
// import Nav from "./task2/Nav";
// import Sidebar from "./task2/Sidebar"
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
// import Header from "./task3.jsx/Header";
// import Footer from "./task3.jsx/Footer";
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
// import Nbar from "./task4/Nbar";
// import Productcard from "./task4/Productcard";
// import CartSummary from "./task4/CartSummary";  
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
// import Dashboard from './Login_sys/Dashboard';
// import Navbar from './Login_sys/Navbar';
// import Loginbutton from './Login_sys/Loginbutton';
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
// import Notification from './notification_sys/Notification';
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
// import Cartcounter from './reducer/Cartcounter'
// import Trafficlight from './reducer/Trafficlight'
// import Texteditor from './reducer/Texteditor'
// import Todo from './reducer/Todo'
// import Banking from './reducer/Banking'
// export default function App(){
 
//   return(
//    <Banking/>
//   )
// }

// --------------theme-switcher----------------------
import { ThemeProvider } from "./themeswitcher/ThemeContext";
import Navbar from "./themeswitcher/Navbar";
import Card from "./themeswitcher/Card";  
export default function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Card/>
    </ThemeProvider>
  )
}