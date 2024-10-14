import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { db } from "../databse/firebaseconfig"
import { useNavigate } from "react-router-dom"
import image from '../assets/images.jpg'
import { logout } from './Logout';


const Home = () => {

  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout();         
    navigate('/Login');
  };


  const [users, setUsers] = useState([])


  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    let userId = localStorage.getItem('user')
    // console.log(userId);

    const list = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push(doc.data());

    });

    setUsers(list)
    console.log(list);
  }


  return (
    <>
      <div>
        <nav className="bg-red-800 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              Chat App
            </div>

            <ul className="flex space-x-4">
              <li>
                <button
                  className="text-white font-bold hover:text-white transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
              <button
            onClick={handleLogout}
            className="text-white font-bold hover:text-white transition duration-300"
          >
            Logout
          </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="h-full">
        {users.map((list) => {
          return (
            <>
              <div className="w-96 flex items-center p-4 border-gray border-r-2 bg-red-700 text-white h-full">
                <div className="flex items-center">
                  <img
                    src={image}
                    className="h-10 w-10 mx-2 rounded-full object-cover"
                    alt="profile"
                  />
                  <h1
                    onClick={() => navigate('/Chat', { state: { ...list } })}
                    key={list.id}
                    className="ml-5 cursor-pointer text-lg font-medium"
                  >
                    {list.name}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}



export default Home