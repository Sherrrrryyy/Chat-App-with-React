import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../databse/firebaseconfig';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  const handleSubmit = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email)
      .then((res) => {
        const user = res.user.uid;
        console.log(user);
        const userId = localStorage.setItem("user", user)
        console.log(userId);
      })
    navigate('/Home', { replace: true });


  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-red-800">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">Don't have an account? <a href="/" className="text-red-500 hover:underline">Signup</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
