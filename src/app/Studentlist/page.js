'use client'
import React from 'react'
import Link from 'next/link';

const page = () => {
    const names = ['sambit','pritam','nitin','tirtha','nikhil']
  return (
    <>
     <h1>Student List</h1> 
     {/* <ul>
        <li><Link href="/Studentlist/1">Sambit 1</Link></li>
        <li><Link href="/Studentlist/2">Sambit 2</Link></li>
        <li><Link href="/Studentlist/3">Sambit 3 </Link></li>
        <li><Link href="/Studentlist/4">Sambit 4</Link></li>

     </ul> */}
   
     <ul>
        {
            names.map((item)=>(
                <li> <Link href={`/Studentlist/${item}`}>{item}</Link></li>
            ))
        }
     </ul>
    
    </>
  )
}

export default page