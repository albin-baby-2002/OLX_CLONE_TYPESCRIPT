
import { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import { AuthContext, AuthType } from '../store/userContext';
import { MessageContextType, messageContext } from '../store/MessageContext';




const PrivateRouteWrapper = ({ component: Component, ...rest }:{component:React.ComponentType}) => {
 
    const {userInfo} = useContext(AuthContext) as AuthType 
    
    const {setMessageDisplay} = useContext(messageContext) as MessageContextType

  if (!userInfo) {
    
    return ( <><Navigate to="/" /> { setMessageDisplay('flex')
    }</>);
   
  }

  return <Component {...rest} />;
};

export default PrivateRouteWrapper

