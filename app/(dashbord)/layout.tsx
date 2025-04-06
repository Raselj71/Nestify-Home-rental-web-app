import Navbar from '@/components/Navbar'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='container mx-auto p-2'>

        <div className=''>
              <Navbar/>
             
        </div>   
        <div>
             {children}
        </div>
    </div>
  )
}

export default layout