import React,{createContext,useState} from "react"

const Context = createContext();

const MyContext = ({children}) => {

return (
  <Context.Provider value="HI">
  
  {children}
  
  </Context.Provider>
)
  
  
}
export { Context, MyContext };