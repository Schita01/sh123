import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type Register = {
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: number;
    city: string;
}

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

axios.defaults.withCredentials = true;

const RegisterStepTwo = () => {
    // const { register, handleSubmit } = useForm();
    const [responseData, setResponseData] = useState<any>(null);

    
    useEffect(() => {
      const getData = async () => {
        const res = await instance.get("/posts")
        const data = await res.data
        setResponseData(data)
      } 
      
      getData()
    },[])

    console.log(responseData)
   

    return (
        <>
            
        </>
    );
}

export default RegisterStepTwo;
