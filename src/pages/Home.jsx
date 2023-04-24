import React, { useEffect, useState } from 'react'
import {auth} from '../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [user,setUser]=useState(null)
    const navigate=useNavigate()
    useEffect(() => {
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                console.log(user);
            } else{
                setUser()
            }
        })
        listen()
    }, [])
    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log("Sign Out Success");
            navigate('/')
        })
        .catch((e)=>console.log(e.message))
    }
    return (
    <div>{user ?(<>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Firebase - App success made simple</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Sign up, log in and manage user session in React and set up Firebase Auth. we are using Firebase Version 9 and React 18. We'll be learning how to use Firebase Authentication in ReactJS to login and sign up users. Firebase is a great platform for building authentication and user management solutions</p>
                </div>
    
                <button  onClick={userSignOut} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Out</button>
            </div>
        </section>
    </>): <p>Sign Out</p> 
    }
    </div>
    )
}

export default Home