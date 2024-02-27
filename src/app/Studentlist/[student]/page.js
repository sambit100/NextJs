'use client'
import React from 'react'
const page = ({params}) => {
    
    console.log(params)
  return (
    <div>
     <h1>Student Details </h1>

         <h5>Name :{params.student}</h5>
         <br />


    </div>
  )
}

export default page