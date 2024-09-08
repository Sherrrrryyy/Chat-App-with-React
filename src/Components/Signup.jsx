import { auth, createUserWithEmailAndPassword, db } from '../databse/firebaseconfig';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { doc, setDoc } from 'firebase/firestore';


function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const checkUser = async () => {
            const user = auth.currentUser;
            if (user) {
                navigate('/Login', { replace: true });
            }
        };
        checkUser();
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user.uid;
                console.log(user);

                const userObj = { name, email, user }
                setDoc(doc(db, "users", user), userObj)
                Swal.fire({
                    title: 'Signup Complete',
                    text: 'Do you want to continue',
                    icon: 'success',
                })

                navigate('/Login', { replace: true });

            })
            .catch((error) => {
                Swal.fire({
                    title: 'Something went wrong',
                    text: 'Signup Again',
                    icon: 'error',
                })
                alert(error.message);
            });


    };
    const checkEmail = async () => {
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            Swal.fire({
                title: 'Email already exists',
                text: 'Please login',
                icon: 'error',
            })
            navigate('/Login', { replace: true });
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Sign Up</h2>
                <form >
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                checkEmail()
                            }
                            }
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
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                    <div className="text-center mt-4">
                        <p className="text-gray-600 text-sm">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
