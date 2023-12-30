import { FormEvent, Fragment, ReactElement, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, AuthType } from "../../store/userContext";
import {storage ,db} from "../../Firebase/config"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import {  useNavigate } from "react-router-dom";

const Create = (): ReactElement => {
  
  const navigate = useNavigate()
  
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState<File|null>(null)
  
  const {userInfo} = useContext(AuthContext)as AuthType
  
  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault()
    
    try {
      
      const imageRef = await ref(storage,`/image/${image?.name}`);
    
      if(image){
        
       await uploadBytes(imageRef, image).then(() => {
        
          console.log('Uploaded a blob or file!')});

          getDownloadURL(imageRef).then( async(url)=>{
  
              console.log(url);
    
              const docRef = await addDoc(collection(db, "products"), {
                    name,
                    category,
                    price,
                    url,
                    userId : userInfo?.uid,
                    createdAt: new Date().toDateString()})  
                    
              navigate('/')
         })
        }
      
      }
      
      catch(error:any){
        
        alert(`Error adding product : ${error.message}`)
      }
    
    
    
   
    
  }
  
  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <div className="innerDiv_post_ad" >
          
          <h2 className="heading_post_ad">POST YOUR AD</h2>
          <form className="post_ad_form" onSubmit={handleSubmit}>
            
            <div>
              
              <label htmlFor="fname">Name</label>
              
              <br />
            
              <input
                className="input"
                type="text"
                id="fname"
                name="Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
            
            </div>
            
            <div>
               
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              
            />
            </div>
            
            
            <div>
              <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            id="fname" 
            name="Price"
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            />
            <br />
            </div>
            
            <div className="upload">
                <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
         
            <br />
            <input type="file" onChange={(e)=>{
               const selectedFile = e.target.files?.[0];
    setImage(selectedFile || null);
            }} />
            <br />
            <button type="submit"  className="uploadBtn">upload and Submit</button>
            </div>
           
            
          </form>
          <br />
          
          
        
         
        </div>
       
      </div>
    </Fragment>
  );
};

export default Create;
