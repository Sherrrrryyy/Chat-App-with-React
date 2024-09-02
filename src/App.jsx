import './App.css'
import React from 'react'
import Home from "./Components/Home"
import NotFound from './Components/NotFound';
import Login from "./Components/Login"
import Loading from './Components/Loading';
import Signup from './Components/Signup';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export default function App() {
 
  const router = createBrowserRouter([
    {path : "/Home", element : <Home/>},
    {path : "/Error", element :<NotFound/>},
    {path : "/Login", element :<Login/>},
    {path : "/Loading", element :<Loading/>},
    {path : "/", element :<Signup/>}



  
  ])
  

return <RouterProvider router={router}/>

}

