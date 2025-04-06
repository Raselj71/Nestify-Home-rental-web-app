'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { logout } from './auth/action'
import { useAuth } from '@/hooks/use-auth'

const page = () => {

const {user,loading}=  useAuth()

 

   return (
    <div>
        <div>User information</div>
        <div>
           <p>Name: {user?.email}</p>
        </div>
        <div>
           <Button onClick={async()=>{ await logout()}}>Signout</Button>
        </div>
    </div>
  )
}

export default page