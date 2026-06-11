import React, { useState, useCallback } from "react";
import UserCard from './UserCard'
import ThemeDisplay from './ThemeDisplay'
export default function Parent(){
  const [theme, setTheme] = useState("dark")
  const [age, setAge] = useState(23)
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme])

  const addAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  return (
    <div>
      <UserCard user={{ name: "Rohan", age }} addAge={addAge} />
      <ThemeDisplay theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}