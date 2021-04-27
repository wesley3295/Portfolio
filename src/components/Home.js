import React from 'react'
import image from "../fam_pic.jpg"
const Home = () => {
    return (
       <main>
           <img src={image} alt="Family" className="absolute object-cover w-full h-full"/>
           <sections className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> 
            <h1 className="text-6xl test-green-100 font-bold cursive leasding-none lg:leading-snug home-name">‘Ello, gov'nor, I'm Wesley!</h1>
           </sections>
       </main>
    )
}

export default Home
