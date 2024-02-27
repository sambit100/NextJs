"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const page = () => {
  const router = useRouter();
  return (
    <>
    <div> Login page</div>
         <Link href="/">Home page</Link>
         <br /><br /><br />
         <button onClick={()=>{router.push("/Login/Student")}}>Student</button>
         <button onClick={()=>{router.push("/Login/Teacher")}}>Teacher</button>
    </>
  )
}

export default page;