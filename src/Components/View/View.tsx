import {  useEffect, useState } from "react";
import "./View.css";

import { db } from "../../Firebase/config";
import {  collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Product } from "../../Types/productType";
import { useParams } from "react-router-dom";

function View() {
  
  
  interface UserFireBaseDoc {
  
  username:string
  id:string
  phone:string
  
  }

  const {postId}= useParams()

  const [sellerId,setSellerId] = useState<string|null>(null)
    
  const [sellerDetails, setSellerDetails] = useState<UserFireBaseDoc |null  >(null)

  const [postDetails,setPostDetails] = useState<Product|null>(null)


  useEffect(()=>{
    
    const fetchData = async()=>{
      
      
      if(postId){
        
        const postRef = doc(db, 'products', postId);

        const postDoc = await getDoc(postRef);
        
        
        if(postDoc){
          
          let product = postDoc.data()
          
          setPostDetails(product as Product);
          
          setSellerId(product?.userId)  }
        
      }
        
    }
      
      fetchData()
      
    },[postId])
    
    
    useEffect(()=>{
      
      const fetchSellerData= async () => {
        
        if(sellerId){
           const sellerInfoQuery = query(collection(db, "users"), where("id", "==", sellerId));

        const snapshot = await getDocs(sellerInfoQuery);
        
        snapshot.forEach((doc)=>{
          
          setSellerDetails(doc.data() as UserFireBaseDoc) ;
          
          console.log('doc data',doc.data())
        })
        }
        
         
        
      }
      
      fetchSellerData()
      
     
      
    },[sellerId])
    

  
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
