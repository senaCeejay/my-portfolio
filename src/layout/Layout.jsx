import React from 'react'
import PageHeader from "../components/PageHeader";
const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full h-screen max-w-[1240px] mx-auto">
                <PageHeader />
                <div className="mt-[-65px]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout