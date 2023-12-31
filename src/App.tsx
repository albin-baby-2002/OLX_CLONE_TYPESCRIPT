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
import Layout from "./Components/Layout/layout";
import PrivateRouteWrapper from "./HOC/PrivateRoute";

function App(): ReactElement {
  
  const {setUserInfo} = useContext(AuthContext) as AuthType
  
  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      
    
    setUserInfo(user) });
    
   
    
  })
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      
     
     <>
     
       <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          
          <Route path="/view/:postId" element={<ViewPost />} />
          
          <Route path="/create" element={ <PrivateRouteWrapper component={Create} />} />
        
          
        </Route>
     
        

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        
        
     </>
      
      
    )
  );

  return <RouterProvider router={router}></RouterProvider>  ;
}

export default App;
