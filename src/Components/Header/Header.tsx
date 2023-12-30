
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { ReactElement, useContext } from "react";
import { AuthContext, AuthType } from "../../store/userContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config";

function Header(): ReactElement {
  const {userInfo} = useContext(AuthContext) as AuthType
  
  const navigate = useNavigate()
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search color="black"></Search>
          <input type="text" 
          placeholder="Location"/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        
        {/* <div className="language">
          <span> ENGLISH </span>
          
          <div className="arrow"><Arrow></Arrow></div>
          
        </div>
         */}
        <div className="loginPage">
          
          {userInfo?(<span className="login_Name">{userInfo.displayName}</span>):(<span className="login_Btn" onClick={()=>{navigate('/login')}} >Login</span>)}
          
          
        
          
        </div>
        
        <div>
          
        {userInfo?( <span className="logout_Btn" onClick={()=>{
          
          
          signOut(auth).then(()=>{
            
            alert('signed out')
          })
          
        }}>Logout</span>):''}
          
        </div>
        
          
         

        <div className="sellMenu" onClick={()=>{navigate('/create')}}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
