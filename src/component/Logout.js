import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {  useSelector } from 'react-redux/es/exports';
import { logout, selectUser } from '../featurs/userSlice';

export const Logout = () => {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    const handleLogout = (e)=>{
        e.preventDefault()
    };
    
    dispatch(logout());
  return (
    <div>
        <h3> Hallo {user.name}</h3>
        <button onClick={(e)=> handleLogout(e)}>Hier Logout</button>
        
    </div>
  )
}

export default Logout ;