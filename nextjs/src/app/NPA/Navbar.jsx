"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
function Navbar() {
    const [isopen,setisOpen] = useState (false)
  return (
   <>
   <nav className='bg-purple-500'>
    <div className='h-16 flex justify-between items-center'>
        <div className='text-3xl font-bold px-4'>LMS</div>
       <div className='hidden sm:block'>
       <Link href="/" className='text-xl px-4 text-white'>Home</Link>
      <Link href="#nnn" className='text-xl px-4 text-white'>About</Link>
      <Link href="/skills" className='text-xl px-4 text-white'>Skills</Link>
      <Link href="/developers" className='text-xl px-4 text-white'>Developers</Link>
      <Link href="/contacts" className='text-xl px-4 text-white'>Contacts</Link>
</div>
        <button onClick={()=>setisOpen(!isopen)} className='px-4 text-4xl text-white'><FiMenu /></button>
    </div>
       <div className= {`${isopen ? "block" : "hidden"} sm:hidden bg-gray-700 py-4`}>
          <Link href="/" className='text-xl px-4 text-white block'>Home</Link>
      <Link href="/Card" className='text-xl px-4 text-white block'>About</Link>
      <Link href="/skills" className='text-xl px-4 text-white block'>Skills</Link>
      <Link href="/developers" className='text-xl px-4 text-white block'>Developers</Link>
      <Link href="/contacts" className='text-xl px-4 text-white block'>Contacts</Link>
        </div>
   </nav>
   </>
  )
}

export default Navbar