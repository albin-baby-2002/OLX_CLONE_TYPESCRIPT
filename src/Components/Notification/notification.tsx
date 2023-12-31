import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react'
import './notification.css'
import { IoClose } from "react-icons/io5";
import loginEntryPoint from '../../assets/Images/loginEntryPointFavorite.webp'
import { MdEmail } from "react-icons/md";
import { MessageContextType, messageContext } from '../../store/MessageContext';

const UserMessage = () :ReactElement=> {
    
    const MessageRef = useRef<HTMLDivElement|null>(null);
    
    const {messageDisplay,setMessageDisplay} = useContext(messageContext) as MessageContextType
    
    useEffect(()=>{
        
        if(MessageRef.current){
            
          MessageRef.current.style.display=   messageDisplay
             
        }
        
       
        
    },[messageDisplay])
    
  return (
    
    <div ref={MessageRef} className='parent_notification'> 
        
        <div  className='notification'>
        
      
        
        <div className='close' onClick={()=>{
          setMessageDisplay('none')
        }}>
          <IoClose  />
        </div>
        
        <div className='quotes'>
          <img src={loginEntryPoint} alt="" />
          <p>Close deals from comfort of your home</p>
        </div>
        
        <div className='methods'>
          
          
          <button> <MdEmail/> Continue with Email</button>
          
          <p className='or'>OR</p>
          
          <p className='signup'><span>SignUp with Email</span></p>
          <p className='info'>All your personal details are safe with us.</p>
          
          <p className='terms'>If you continue, you are accepting <span>OLX Terms and Conditions and Privacy Policy</span> </p>
        </div>
        
        
        
      
    </div></div>
    
   
  )
}

export default UserMessage
