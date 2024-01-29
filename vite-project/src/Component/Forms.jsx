import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {

    const {registrationSuccess , setRegistrationSuccess} = useState(false)

    const showToast = () => {
        toast.success('Registration Successfully', {
          position: "top-center",
          autoClose:2000
        });
      };

    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = () =>{
        showToast()
        setRegistrationSuccess(true);
    }

    return (
        <div className='form'>
        <h1>Registration Form</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="firstName" {...register("firstName" , {required:"First Name is Required"})}  placeholder='Enter your First Name' />
            {errors.firstName && <p className='alert'>{errors.firstName.message}</p>}
         

            <input type="text" name="lastName" {...register("lastName" , {required:"Last Name is Required"})}  placeholder='Enter your Last Name' />
            {errors.lastName && <p className='alert'>{errors.lastName.message}</p>}
          

            <input type="text" name="email" {...register("email" , {
                required:"Email is required.!", 
                pattern:{value: /^\S+@\S+$/i, 
                message:"Invalid Email.!" 
                }})}  placeholder='Enter your Email' />
            {errors.email && <p className='alert'>{errors.email.message}</p>}
          

            <input type="password" name="password" {...register("password" , {
                required:"Password is Required",
                minLength: {
                    value:5, 
                    message:"Password must be more than 4 characters"},
                maxLength:{
                    value:20, 
                    message:"Password cannot be more than 20 characters"}
                })}  placeholder='Enter your Password' />
            {errors.password && <p className='alert'>{errors.password.message}</p>}
          

          <input type="submit" value="Register" style={{backgroundColor: "Green" , color:"white" ,  border:"none" , fontSize:"18px" , borderRadius:"2px" , padding:"10px", height:"auto" , cursor:"pointer"}}/>  
  
        </form>
  
        
        <ToastContainer />
  
  
      </div>
    )
}

export default Forms