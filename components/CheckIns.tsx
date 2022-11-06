import React from 'react'
import { CheckIn } from './modalform'

interface CheckInProps {
    checks: CheckIn[]
}
const CheckIns = ({ checks }: CheckInProps) => {

    const mapToDisplayChecks = checks.length > 0 ? checks.map((check: CheckIn) => {
        return (
            <React.Fragment key={check.id}>
                <label htmlFor="">{check.name}</label>
                <input type="radio" />
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