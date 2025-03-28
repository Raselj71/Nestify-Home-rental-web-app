'use client'
import { Button } from '@/components/ui/button'
import useAuth from '@/hooks/use-auth'
import { supabaseBrowserClient } from '@/utils/supabase/client'
import { supabaseServerClient } from '@/utils/supabase/ServerClient'
import React from 'react'
import { logout } from './auth/action'

const page = () => {

const {data,loading}=  useAuth()

 

   return (
    <div>
        <div>User information</div>
        <div>
           <p>Name: {data?.fullName}</p>
        </div>
        <div>
           <Button onClick={async()=>{ await logout()}}>Signout</Button>
        </div>
    </div>
  )
}

export default page