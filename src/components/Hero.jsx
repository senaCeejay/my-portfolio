import React from 'react'
import Profile from "../assets/images/cj.png"

const Hero = () => {
    return (
        <>
            <div className='mt-[70px] text-center gap-10 lg:text-left flex items-center w-full flex-col lg:flex-row justify-center md:gap-10 lg:gap-0 lg:justify-between p-4'>
                <div className='mt-2'>
                    <div className=''>
                        <p className='font-bold'>Hello, I'm</p>
                        <h1 className='text-3xl lg:text-6xl font-bold text-sky-400'>Chris Cee-jay Sena</h1>
                    </div>
                    <div className='flex w-full justify-center lg:justify-start gap-1 md:my-2'>
                        <p className='text-lg md:text-2xl font-semibold'>Front End Developer and UI/UX Designer</p>
                    </div>
                    <div className='max-w-[600px] justify-center lg:justify-start flex'>
                        <p>Enthusiastic junior front-end developer with a strong foundation in HTML, CSS, and JavaScript, with a particular focus on Reactjs.</p>
                    </div>
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1yZQyKWBwKRjF26eieV1PUQkxQ9jFinFx&export=download" className='font-semibold w-36 rounded-md mt-3 mx-auto lg:mx-0 flex gap-2 align-center justify-center text-sm p-2 bg-sky-400 text-white hover:bg-sky-500'>
                        Download CV
                    </a>
                </div>
                <div className='flex justify-center items-center lg:justify-end order-first lg:order-last'>
                    <img className="h-[300px] w-[300px] md:w-[350px] md:h-[350px] rounded-full" src={Profile} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero