import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <Link href="/">
                        E-Journal
                    </Link>
                </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/journal">
                            Journal
                        </Link>
                    </li>
                    <li>
                        <Link href="/lists">
                            Lists
                        </Link>
                    </li>
                    <li>
                        <Link href="/daily-check-ins">
                            Daily Check-Ins
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar