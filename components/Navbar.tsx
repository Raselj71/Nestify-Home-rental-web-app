import React from 'react'
import Link from 'next/link'
import nestify from '@/public/nestify.png'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='flex  justify-between mx-auto'>
        <div className=''>
            <Link href={"/"}>
            <Image className='w-32 md:w-40 lg:w-[200px] xl:w-[400px]' src={nestify} width={200} height={100} alt="Nestify"/>
            </Link>
        </div>

    </div>
  )
}

export default Navbar