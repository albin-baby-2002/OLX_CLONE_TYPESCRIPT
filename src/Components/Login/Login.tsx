import { ReactElement, useState,FormEvent, useEffect } from "react";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth} from "../../Firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(): ReactElement {
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const navigate = useNavigate()
  
 
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  
  const [hasInteracted, setHasInteracted] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  
   const handleNavigation = ()=>{
    
    navigate('/signup')
  }
  
  
  const handleLogin = (e:FormEvent<HTMLFormElement>):void=>{
    
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    
    navigate('/')
 
  })
  .catch((error) => {
 
    const errorMessage = error.message;
    
    alert(`Login Failed : ${errorMessage}`)
  });
  }
  
   useEffect(() => {
    if (hasInteracted) {
      setEmailValidation(emailRegex.test(email) && email.trim().length > 0);
    }
  }, [email]);
  
  
  
  return (
    <div>
      <div className="loginParentDiv">
        <img width="250px" height="200px" src={Logo}></img>
        
        <form onSubmit={handleLogin}  className="form_login">
          
          <div>
            <label htmlFor="LoginEmail">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="LoginEmail"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
              setHasInteracted(true);
            }}
            
          />
             {!emailValidation ? <p className="error"> Invalid Email</p> : ""}
          </div>
          
          <div>
             <br />
          <label htmlFor="loginPassword">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="loginPassword"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            
           
          />
            
          </div>
          
          <div>
            
          <button>Login</button>
          
          </div>
          
          
         
          
        </form>
        
        <a  onClick={handleNavigation}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
