"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [name ,setName]= useState('');

   const handleRoute =(item)=>{
    router.push(item)
   }
   
  return (
    <main>
          <p>Hii there</p>
      <User name="sambit_behera" />

     <Link href="/Login">LoginPage</Link> <br/>
     <Link href="/About">AboutPage</Link>
     <br /><br />
     {/* here you have to write call back function */}
     <button onClick={()=>handleRoute('/Login')}>Login</button>
     <button onClick={()=>handleRoute('/About')}>About</button>

    </main>
  );
}

export const User=( props)=>{
   const [name,setName]=useState('sambit');
   const handleName =()=>{
    setName('behera');
   }
  return(
    <>
        <h1  >Hii there i am {name} </h1>
        <button onClick={handleName}>show Name</button>
    </>
  );
}