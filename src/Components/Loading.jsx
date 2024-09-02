import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading(props) {

    const navigate = useNavigate()


useEffect(()=>{
checkUser()
},[])

const checkUser = async () =>{
const uid = await localStorage.getItem("uid");
if(uid){
    navigate('/Home')
    // window.location.href = '/Home'
}else{
    navigate('/Login')
    // window.location.href = '/Login'
}

}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-ping"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-ping animation-delay-200"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-ping animation-delay-400"></div>
      </div>
    </div>
  );
}

export default Loading;
