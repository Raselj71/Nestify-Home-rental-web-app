import React from 'react'
import { Button } from './ui/button'
import { logout } from '@/app/auth/action'

function Signout() {

  return (
    <Button className='w-full' variant={'outline'} onClick={async()=>{
        logout()
    }}>
        Log out
    </Button>
  )
}

export default Signout