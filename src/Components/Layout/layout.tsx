import { ReactElement } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import UserMessage from "../Notification/notification"
import MessageContextProvider from "../../store/MessageContext"




const Layout = ():ReactElement => {
  return (
    <>
 
        <Header />
        <UserMessage/>
        <Outlet/>
    
    
      
    </>
  )
}

export default Layout
