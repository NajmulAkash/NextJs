import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
   <>
   <nav className='w-full h-16 bg-gray-900 '>
    <h1 className='text-white text-2xl font-semibold py-3 px-9'>My Website</h1>
    <div className='space-x-6justify-center items-center'>
     <Link href="/" className='text-white text-center justify-center items-center'>Home</Link>
    </div>
   </nav>
   </>
  )
}

export default Navbar