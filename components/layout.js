import React from "react"
import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <div id="modal-root" className="h-screen w-full absolute left-0 top-0 backdrop-blur-sm scale-0 transition-all duration-300 flex justify-center items-center"></div>
        </>
    )
}

export default Layout