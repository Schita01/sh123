import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePersistUser = () => {
    const navigate = useNavigate()
    
    const persistUser = () => {
        const token = localStorage.getItem("token");

        if(!token){
          navigate("/")
      
        }else{
          //....
          
        }
      

        

    }


    useEffect(() => {
        persistUser()
    }, [])
    
    

  
};

export default usePersistUser;
