import React from 'react';
import { MdOutlineClose } from "react-icons/md";
const DetailModal = ({ project, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-4 rounded-lg max-w-xl relative h-auto">
                <div className='flex items-center justify-between w-full mb-4'>
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <button className="rounded-full hover:bg-gray-100 p-1" onClick={closeModal}><MdOutlineClose size={25} /></button>
                </div>
                <div className='relative'>
                    <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-t from-slate-100 to-transparent cursor-pointer">
                        <img className='w-[50px]' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" onClick={() => window.open(project.repository)} />
                    </div>
                </div>
                {project.language.map((val, index) => (
                    <span key={index}>{val.name} | </span>
                ))}
                <p className='text-sm my-3'>{project.description}</p>
                <div className='mt-2 flex justify-between gap-2'>
                    <div className='flex gap-2'>
                        <button className='p-2 rounded-md border bg-sky-400 text-white hover:bg-sky-500 duration-300' onClick={() => window.open(project.live)}>View Live</button>
                        <button className='p-2 rounded-md border text-sky-400 border-sky-400 duration-300' onClick={() => window.open(project.repository)}>Project Repository</button>
                    </div>
                    <button className='p-2 rounded-md border border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-300' onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
