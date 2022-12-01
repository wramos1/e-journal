import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CheckIns from './CheckIns'
import CheckIn from '../types/CheckIn'

interface CheckInProps {
    checks: CheckIn[]
}
const DailyCheck = ({ checks }: CheckInProps) => {
    const [date, setDate] = useState<string>();

    useEffect(() => {
        const date = new Date();
        setDate(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);
    }, [])


    //Function to receive values for inputs in Check Ins
    //Maybe pass props back up to parent component with values inserted
    //Add optional value prop to interface to store this value in CheckIn
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    //Function to display Check Ins (Condtional to display what type of input is needed)
    const mapToDisplayChecks = checks.length > 0 ? checks.map((check: CheckIn, i: number) => {
        return (
            <CheckIns
                key={i}
                check={check}
            />
        )
    }) : null;


    return (
        <div className='m-2'>
            <form onSubmit={handleSubmit} className="w-full p-2 border border-gray-300 flex flex-col">
                <h1>
                    {date}
                </h1>

                <div className='flex'>
                    {mapToDisplayChecks}
                </div>

                <button className='button mx-auto my-0 px-6'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DailyCheck