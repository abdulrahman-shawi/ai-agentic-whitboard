"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { SparkleIcon } from 'lucide-react';
import React from 'react'

function WelcomeBanner() {
    const {user} = useUser();
  return (
    <div>
      <div className="p-10 border rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h2 className='text-2xl font-bold'>Welcome Back, {user?.fullName}</h2>
        <p className="mt-1">Bring your ideas to life on infinite canvas.</p>
        <div className="t-5 flex items-center gap-2 mt-5">
            <Button>+ Create New Project</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-purple-500">
                <SparkleIcon/> Ai Helper
            </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
