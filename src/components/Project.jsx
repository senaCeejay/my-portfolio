import React, { useState } from 'react';
import { projects } from '../data/projects';
import DetailModal from "../components/DetailModal";
const Project = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const toggleModal = (val) => {
        setShowModal(!showModal);
        setSelectedProject(val);
    };
    if (showModal) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }

    return (
        <div className='mt-[65px] w-full p-4'>
            <h1 className='font-semibold text-2xl text-sky-400'>Projects</h1>
            <div className=' text-base'>
                <p>
                    "Dive into my front-end projects and immerse yourself in a world of innovative design, fluid animations, and seamless user interactions, elevating web experiences to new heights."</p>
            </div>
            <div className='card grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 relative '>
                {projects.map((val, index) => (
                    <div key={index} className='h-[400px] p-4 border border-gray-300 rounded-xl relative'>
                        <div className='relative'>
                            <img src={val.thumbnail} alt="" className=' rounded-lg w-full object-cover h-[170px]' />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-t from-slate-100 to-transparent cursor-pointer">
                                <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" onClick={() => window.open(val.repository)} />
                            </div>
                        </div>
                        <h1 className='font-bold text-1xl my-2'>{val.title}</h1>
                        <div className='flex gap-2'>
                            {val.language.map((vals, index) => (
                                <>
                                    <span className='flex items-center gap-1' key={index}>{vals.name} |</span>
                                </>
                            ))}
                        </div>
                        <p className='text-sm line-clamp-3'>{val.description}</p>
                        <div className='absolute bottom-0 my-4 flex gap-2'>
                            <button className='p-2 bg-sky-400 rounded-md hover:bg-sky-500 text-white duration-300' onClick={() => {
                                toggleModal(val); // Pass the entire val object
                            }}>Details</button>
                            {val.live &&
                                <button className='p-2 rounded-md border border-sky-400 text-sky-400 ' onClick={() => window.open(val.live)}>Live Preview</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
            {showModal && <DetailModal project={selectedProject} closeModal={() => setShowModal(false)} />}
        </div>
    )
}

export default Project;
