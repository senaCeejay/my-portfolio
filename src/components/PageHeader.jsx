import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { pageheaderdata } from '../data/pageheader'
import { NavLink, Link } from 'react-router-dom'
const PageHeader = (props) => {

    return (
        <div className='flex justify-between py-4 relative px-4'>
            <h1 className='text-2xl font-bold text-sky-400 cursor-pointer'>
                <Link to='/'>
                    Chris .
                </Link>
            </h1>
            <div>
                <ul className='gap-5 font-semibold hidden md:flex'>
                    {pageheaderdata.map((val, index) => (
                        <li key={index} className='p-1'>
                            <NavLink
                                to={val.path}
                            >
                                {val.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className='md:hidden flex items-center'>
                    <button onClick={props.showSidebar}>
                        <HiMenuAlt2 size={30} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PageHeader