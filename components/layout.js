import React from "react"
import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <div id="modal-root"></div>
        </>
    )
}

export default Layout