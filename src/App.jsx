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
    {path : "/", element :<Signup/>},
    {path : "/Login", element :<Login/>},
    {path : "/Loading", element :<Loading/>},
    {path : "/Home", element : <Home/>},
    {path : "/", element :<NotFound/>},



  
  ])
  

return <RouterProvider router={router}/>

}

