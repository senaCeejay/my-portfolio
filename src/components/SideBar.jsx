import React from 'react'
import { pageheaderdata } from '../data/pageheader'
import { Link } from 'react-router-dom'
const SideBar = (props) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white p-4 max-w-xl relative h-full w-full z-20">
                    <h1 className='text-2xl font-bold text-sky-400 cursor-pointer'>
                        <Link to='/'>
                            Chris .
                        </Link>
                    </h1>
                    <ul className='gap-10 font-semibold mt-5'>
                        {pageheaderdata.map((val, index) => (
                            <li key={index} className='p-2 ' onClick={props.closeModal}>
                                <Link to={val.path}>
                                    {val.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar