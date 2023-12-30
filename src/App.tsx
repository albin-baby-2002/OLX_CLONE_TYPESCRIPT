import { ReactElement, useContext, useEffect } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, AuthType } from "./store/userContext";
import { auth } from "./Firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
import ViewPostContextProvider from "./store/ViewPostContext";

function App(): ReactElement {
  
  const {setUserInfo} = useContext(AuthContext) as AuthType
  
  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
       console.log(user);
    
    setUserInfo(user) });
    
   
    
  })
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      
     
     <>
     <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        
        <Route path="/create" element={<Create />} />
        
        <Route path="/view" element={<ViewPost />} />
     </>
      
      
    )
  );

  return <ViewPostContextProvider><RouterProvider router={router}></RouterProvider> </ViewPostContextProvider> ;
}

export default App;
