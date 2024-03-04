import React from 'react'

const AboutMe = () => {
    return (
        <div className='mt-[70px] p-4 w-full'>
            <h1 className='font-semibold text-2xl text-sky-400'>About Me</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-grow-1 gap-5  mt-4'>
                <div className='border border-gray-200 p-4 rounded-xl'>
                    <div className="flex w-46" >
                        <p className='bg-sky-400 flex items-center gap-2 text-white rounded-lg p-1 px-2'>
                            Education
                        </p>
                    </div>

                    <span className='flex mb-0 text-4xl text-sky-400 mx-0 px-0'>•</span>
                    <div className='px-1'>
                        <div className='border-l-2 border-sky-400 border-solid relative px-3'>
                            <p className='text-xl font-semibold'>Full Stack Web Developer</p>
                            <p className='text-slate-600 font-medium'>KodeGo (BootCamp)</p>
                            <p className='text-slate-400 font-light flex items-center gap-2'>
                                Aug 2022 - Nov 2022
                            </p>
                        </div>
                    </div>
                    <span className='flex mb-0 text-4xl text-sky-400 mx-0 px-0'>•</span>
                    <div className='px-1'>
                        <div className='border-l-2 border-sky-400 border-solid relative px-3'>
                            <p className='text-xl font-semibold'>Bachelor of Science in Information Technology</p>
                            <p className='text-slate-600 font-medium'>City College Of Tagaytay</p>
                            <p className='text-slate-400 font-light flex items-center gap-2'>
                                Aug 2018 - Aug 2022
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 p-4 rounded-xl'>
                    <div className='flex w-46'>
                        <p className='bg-sky-400 flex items-center gap-2 text-white rounded-lg p-1 px-2'>
                            Experience
                        </p>
                    </div>

                    <span className='flex mb-0 text-4xl text-sky-400 mx-0 px-0'>•</span>
                    <div className='px-1'>
                        <div className='border-l-2 border-sky-400 border-solid relative px-3'>
                            <p className='text-xl font-semibold'>UI / UX Designer</p>
                            <p className='text-slate-600 font-medium'>Microsourcing Philippines</p>
                            <p className='text-slate-400 font-light flex items-center gap-2'>
                                Feb 2023 - Jan 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 p-4 rounded-xl'>
                    <div className='flex w-46'>
                        <p className='bg-sky-400 flex items-center gap-2 text-white rounded-lg p-1 px-2'>
                            Certificate
                        </p>
                    </div>

                    <span className='flex mb-0 text-4xl text-sky-400 mx-0 px-0'>•</span>
                    <div className='px-1'>
                        <div className='border-l-2 border-sky-400 border-solid relative px-3'>
                            <p className='text-xl font-semibold'>Completed Full Stack Web Developer Bootcamp</p>
                            <p className='text-slate-600 font-medium'>KodeGo</p>
                            <p className='text-slate-400 font-light flex items-center gap-2'>
                                Nov 2022
                            </p>
                            <a className='text-sky-400 underline' href="https://drive.google.com/file/d/1wqCodk6oJ-Nvz6PrPLGw4FI1B-Xo3J3M/view?usp=drive_link" target='_blank' rel="noopener noreferrer">View Certificate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe