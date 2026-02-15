import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
   <>
   <nav className='w-full h-16 bg-gray-900  py-6 px-6'>
    <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-semibold tracking-wide text-white'>My Website</h1>
        <div className='space-x-6'>
            <Link href="/" className='text-white'>Home</Link>
            <Link href="/" className='text-white'>About</Link>
            <Link href="/" className='text-white'>Developer</Link>
            <Link href="/" className='text-white'>Blogs</Link>
            <Link href="/" className='text-white'>Contact</Link>
        </div>
    </div>
   </nav>
   </>
  )
}

export default Navbar