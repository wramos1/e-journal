import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex flex-row top-0 w-full px-7 py-4 items-center'>
            <div className='w-full'>
                <h1 className='text-2xl'>
                    <Link href="/">
                        E-Journal
                    </Link>
                </h1>
            </div>

            <div className='w-full'>
                <ul className='flex flex-row justify-between text-lg'>
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