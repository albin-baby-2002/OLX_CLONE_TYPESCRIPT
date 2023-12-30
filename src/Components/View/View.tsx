import { useContext, useEffect, useState } from "react";
import "./View.css";
import { PostContextType, viewPostContext } from "../../store/ViewPostContext";
import { db } from "../../Firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Product } from "../../Types/productType";
import { FirebaseApp } from "firebase/app";
function View() {
  
  interface UserFireBaseDoc {
  
  username:string
  id:string
  phone:string
}
  
  const {postDetails} = useContext(viewPostContext) as PostContextType
  
  
  const [sellerDetails, setSellerDetails] = useState<UserFireBaseDoc |null  >(null)
  
  useEffect(()=>{
    
   const fetchData =async () => {
    
    console.log(postDetails);
    
    
    if(postDetails){
      const {userId} = postDetails as Product
        
        const sellerInfoQuery = query(collection(db, "users"), where("id", "==", userId));

        const snapshot = await getDocs(sellerInfoQuery);
        
        snapshot.forEach((doc)=>{
          
          setSellerDetails(doc.data() as UserFireBaseDoc) ;
          
          console.log('doc data',doc.data())
        })
    }
    
        
   }
   
   
   fetchData()
    
  },[postDetails])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails?.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails?.name}</span>
          <p>{postDetails?.category}</p>
          <span>{postDetails?.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{sellerDetails?.username}</p>
          <p>{sellerDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
