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
       <Link href="/" className='text-xl px-4'>Home</Link>
      <Link href="/about" className='text-xl px-4'>About</Link>
      <Link href="/skills" className='text-xl px-4'>Skills</Link>
      <Link href="/developers" className='text-xl px-4'>Developers</Link>
      <Link href="/contacts" className='text-xl px-4'>Contacts</Link>
</div>
        <button onClick={()=>setisOpen(!isopen)}><FiMenu /></button>
    </div>
       <div className= {`${isopen ? "block" : "hidden"} sm:hidden bg-gray-200`}>
           <a href="" className='text-xl px-4 block py-1'>Home</a>
           <a href="" className='text-xl px-4 block py-1'>About</a>
           <a href="" className='text-xl px-4 block py-1'>Skills</a>
           <a href="" className='text-xl px-4 block py-1'>Developers</a>
           <a href="" className='text-xl px-4 block py-1'>Contacts</a>
        </div>
   </nav>
   </>
  )
}

export default Navbar