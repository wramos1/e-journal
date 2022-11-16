import React, { useState } from 'react'
import { CheckIn } from './modalform'

interface CheckInProps {
    checks: CheckIn[]
}
const CheckIns = ({ checks }: CheckInProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onSelectRadioButton = (e: React.MouseEvent<HTMLInputElement>) => {
        if (isChecked) {
            e.currentTarget.checked = false;
            setIsChecked(false);
            return;
        }
        setIsChecked(true);
    }

    //Function to display Check Ins (Condtional to display what type of input is needed)
    const mapToDisplayChecks = checks.length > 0 ? checks.map((check: CheckIn) => {
        const { name, id, type } = check
        return (
            type === 'radio' ?
                <React.Fragment key={id}>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} id={name} onClick={(e) => onSelectRadioButton(e)} />
                </React.Fragment>
                :
                <React.Fragment key={id}>
                    <label htmlFor={name}>{name}</label>
                    <input type={type} id={name} maxLength={20} />
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