import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { db } from "../databse/firebaseconfig"

const Home = () => {

  const [users, setUsers] = useState([])
  // console.log(user, "users");


  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const list = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push(doc.data());



    });
    console.log(list);

    setUsers(list)
  }






  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              User List
            </div>

            <ul className="flex space-x-4">
              <li>
                <a
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Chat
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Location
                </a>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        {users.map(list => {
          return (

            <>
              <div className="flex justify-between p-4 border-b border-gray-200">
                <h1 key={list.id} className=" items-center  text-lg flex font-medium">{list.name}</h1>
                {/* <p className="text-lg flex font-medium">{list.email}</p> */}
                <button className="text-lg flex font-medium">Message</button>
              </div>
            </>

          )
        })}
      </div>

    </>
  )

}

export default Home