import {    ReactNode,  createContext, useState } from "react";

export interface MessageContextType {
    
    messageDisplay:string 
    setMessageDisplay:React.Dispatch<React.SetStateAction<string>>
} 


export const messageContext = createContext<MessageContextType|null>(null);

const MessageContextProvider = ({children}:{children:ReactNode})=>{
    
    const [messageDisplay, setMessageDisplay] = useState<string>('none')
    
   let  values = {messageDisplay,setMessageDisplay}
    
    return (<messageContext.Provider value={values}>
        
        {children}
        
    </messageContext.Provider>)
    
}

export default MessageContextProvider
