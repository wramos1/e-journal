import React, { MouseEventHandler } from 'react'
import { CheckIn } from './modalform'

interface CheckInProps {
    checks: CheckIn[]
}
const CheckIns = ({ checks }: CheckInProps) => {
    const onSelectRadioButton = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked)
    }

    //Function to display Check Ins
    const mapToDisplayChecks = checks.length > 0 ? checks.map((check: CheckIn) => {
        return (
            <React.Fragment key={check.id}>
                <label htmlFor="">{check.name}</label>
                <input type={check.type} />
            </React.Fragment>
        )
    }) : null;

    return (
        <div>
            {mapToDisplayChecks}
        </div>
    )
}

export default CheckIns