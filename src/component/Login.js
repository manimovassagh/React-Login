import React, { useState } from 'react';
import {useDispatch} from 'react-redux'


function Login() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    // const dispatch = useDispatch();

    // dispatch(login({
    //     name:name,
    //     email:email,
    //     password:password,
    //     loggedIn:true

    // }))

    const handelChange =(e)=>{
        setName(e.target.value);
    };


    const emailHandleChange = (e)=>{
        setEmail(e.target.value);
    };


    const passwordHanleChange = (e)=>{
        setPassword(e.target.value)
        console.log(passwordHanleChange);

    };
    
    const handleSubmit=(e)=>{
        e.prventDefault();
    }
    
  return (
    <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <h1> Login </h1>
            <input type="name" placeholder='Name' value={name} onChange={handelChange} /><br/>
            <input type="email" placeholder='email' value={email} onChange={emailHandleChange}/><br/>
            <input type="password" placeholder='password' value={password} onChange ={passwordHanleChange}/><br/>
            <button type='submit' >Drücken</button>
        </form>
    </div>
  )
}

export default Login