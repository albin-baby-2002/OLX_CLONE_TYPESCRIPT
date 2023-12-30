import { ReactNode, createContext, useState } from "react";
import { Product } from "../Types/productType";

export type PostContextType = {
    postDetails:Product|null,
    setPostDetails: React.Dispatch<React.SetStateAction<Product | null>>
}

export const viewPostContext = createContext<PostContextType|null>(null);

const ViewPostContextProvider = ({children}:{children:ReactNode})=>{
    
    const [postDetails, setPostDetails] = useState<Product|null>(null);
    
   let  values = {postDetails,setPostDetails}
    
    return (
        <viewPostContext.Provider  value={values}>
            {children}
        </viewPostContext.Provider>
    )
}

export default ViewPostContextProvider

