import React, { useState } from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import PageHeader from "./components/PageHeader";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
function App() {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <div className="max-w-[1240px] mx-auto relative">
                <PageHeader showSidebar={() => setShowSidebar(!showSidebar)} />
                <div className='mt-[-70px] w-full h-screen flex '>
                    <Routes>
                        <Route path='/' element={<Hero />} />
                        <Route path='/about' element={<AboutMe />} />
                        <Route path='/project' element={<Project />} />
                    </Routes>
                </div>
            </div>
            {showSidebar && <SideBar closeModal={() => setShowSidebar(false)} />}
       

        </>
    );
}

export default App;
