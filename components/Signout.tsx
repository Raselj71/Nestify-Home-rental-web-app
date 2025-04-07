import React from 'react'
import { Button } from './ui/button'
import { logout } from '@/app/auth/action'
import { LogOut } from 'lucide-react'

function Signout() {

  return (
    <Button className='w-full' variant={'outline'} onClick={async()=>{
        logout()
    }}>
      <LogOut/>  Log out
    </Button>
  )
}

export default Signout