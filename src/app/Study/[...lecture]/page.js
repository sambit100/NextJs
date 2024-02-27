
'use client'
import React from 'react';
const page = (params) => {
    console.log(params)
  return (
    <> 
 <h2>Lectures </h2>
 <h1>{params.lecture}</h1>
    
    
    
    </>

  )
}

export default page