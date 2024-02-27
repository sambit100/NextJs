'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const layout = ({children}) => {
    const path = usePathname();
    console.log(path)
    return (
      <div>
        { path !=="/Login/Teacher"?(
            <ul style={{listStyle:"none" ,textDecoration:"none", display:"flex", justifyContent:"space-between",alignItems:"center",padding:"5px"}}>
          <li> <h4>Login Navbar </h4></li>
          <li><Link href="/Login">Login Main</Link> </li>
          <li><Link href="/Login/Student">Student</Link> </li>
          <li><Link href="/Login/Teacher">Teacher</Link> </li>
        </ul>
        ):<Link href="/">Main page</Link>}
            {children}
            </div>
  )
}

export default layout