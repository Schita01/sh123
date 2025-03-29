import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserContextType } from '../context/userContext';
import { getDefaultAutoSelectFamilyAttemptTimeout } from 'net';

type Register = {
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: number;
    city: string;
}

axios.defaults.withCredentials = true;





const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    // const {user, setUser} = useContext(UserContext) as UserContextType;
    

    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
      const fetchCsrfToken = async () => {
          try {
              const response = await axios.get('http://93.186.214.112:8000/login');
              setCsrfToken(response.data.csrfToken);
              console.log(response.data.csrfToken)
          } catch (error) {
              console.error('Error fetching CSRF token:', error);
          }
      };

      fetchCsrfToken();
  }, []);
  


    const onSubmit = async (data: Register) => {
          try {
            if (!csrfToken) {
                throw new Error("CSRF token not found");
            }
            const res = await axios.post(
                "http://93.186.214.112:8000/login",
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'X-CSRFToken': csrfToken
                    }
                }
            );

            // localStorage.setItem("token", JSON.stringify(res.data.token))
            // setUser(res.data.user)
            
         
            navigate("RegisterStepTwo");

            

        } catch (error) {
            console.error("An error occurred:", error);
        }
        console.log(data);

    };
    
    
  return (
    <>
        <div className="register">
            <div className="register-container">
                <div className="container">
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                        <label htmlFor="fname">სახელი</label>
                        <input 
                          className="register-inp"
                          placeholder="სახელი"
                          {...register("name")} />

                        <label htmlFor="fname">გვარი</label>
                        <input 
                          className="register-inp"
                          placeholder="გვარი"
                          {...register("surname")}/>

                        <label htmlFor="fname">ელ.ფოსტა</label>
                        <input 
                          className="register-inp"
                          placeholder="ელ.ფოსტა"
                          {...register("email")} />

                        <label htmlFor="fname">პაროლი</label>
                        <input className="register-inp" placeholder="პაროლი" type="password"  {...register("password")} />
                        <label htmlFor="fname">ტელეფონის ნომერი</label>
                        <input className="register-inp" placeholder="მობილურის ნომერი"  {...register("phone")} />
                        <label htmlFor="fname">ქალაქი</label>
                        <input className="register-inp" placeholder="თბილისი"  {...register("city")}/>
                        <button className="register-submit" type="submit">დარეგისტრირდი პარტნიორ მძღოლად</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register