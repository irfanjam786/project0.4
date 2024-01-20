import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
     <header className=" flex py-1 px-1 text-2xl  bg-blue-800  ">
    <Image className="w-23 h-25 md:w-15 ml-auto  " src="/irfano.jpg" alt="" width="60" height="120"/>
    </header> 
       </div>
  )
}

export default page