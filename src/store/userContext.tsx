import { User } from "firebase/auth";
import { ReactNode, createContext, useState } from "react";

export type AuthType = {
    userInfo:User|null,
    setUserInfo:React.Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthType|null>(null);


 const AuthContextProvider = ({children}:{children:ReactNode})=>{
    
    const [userInfo,setUserInfo] = useState<User| null>(null);
    
    const values = {userInfo,setUserInfo}
    
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
    
    
}

export default AuthContextProvider