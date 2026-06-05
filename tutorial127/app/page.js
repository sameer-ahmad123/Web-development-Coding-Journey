"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Dashboard = () => {
  // 1. We extract the session data and its current status
  const { data: session, status } = useSession()

  // 2. If the engine is still checking the wristband, show a loader
  if (status === "loading") {
    return <div className="h-screen w-screen bg-slate-900 text-white flex justify-center items-center">Loading...</div>
  }

  // 3. If the user IS logged in, show their private data!
  if (session) {
    return (
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-900 gap-6'>
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-center gap-4 shadow-xl">
          
          {/* We dynamically pull their GitHub/Google profile picture */}
          <img 
            src={session.user.image} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />
          
          <h2 className="text-white text-2xl font-bold">
            Welcome back, {session.user.name}
          </h2>
          <p className="text-gray-400">{session.user.email}</p>

          <button 
            className='bg-red-600 p-3 w-48 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 mt-4' 
            onClick={() => signOut()}
          >
            Log out
          </button>
        </div>
      </div>
    )
  }

  // 4. If the user is NOT logged in, show the login buttons
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-900 gap-4'>
      <h1 className="text-white text-3xl font-bold mb-4">Developer Access</h1>
      
      <button 
        className='bg-gray-800 text-white border border-gray-600 p-3 w-64 rounded-xl font-bold transition-all hover:scale-105' 
        onClick={() => signIn("github")}
      >
        Log in with GitHub
      </button>

      <button 
        className='bg-white text-black p-3 w-64 rounded-xl font-bold transition-all hover:scale-105' 
        onClick={() => signIn("google")}
      >
        Log in with Google
      </button>
    </div>
  )
}

export default Dashboard