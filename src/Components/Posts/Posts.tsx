import { ReactElement, useContext, useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { Product } from "../../Types/productType";

import { useNavigate } from "react-router-dom";



function Posts(): ReactElement {
  
  const navigate = useNavigate()
  
  

  
  const [products,setProducts] = useState<Product[]|[]>([]);
  
  useEffect(()=>{
    
    const fetchData = async()=>{
      const querySnapshot = await getDocs(collection(db, "products"));
      
     const allProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as Product));
        
        setProducts(allProducts)
        
    }
    
    
    
fetchData()

    

  },[])
  
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        
        {products?.map((product)=>(
          
          <div key={product.id} className="card" 
          
          onClick={()=>{
            
            
            navigate(`/view/${product.id}`)
          }}>
            
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
        ))}
          
          
          
          
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
