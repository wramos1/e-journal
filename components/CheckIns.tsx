import React, { useState } from 'react'
import { CheckIn } from './modalform'

interface CheckInProps {
    checks: CheckIn[]
}
const CheckIns = ({ checks }: CheckInProps) => {

    //Boolean state to see is button has been checked
    const [isChecked, setIsChecked] = useState<boolean>(false);

    //Function to allow select/deselect of button clicked
    const onSelectRadioButton = (e: React.MouseEvent<HTMLInputElement>) => {
        if (isChecked) {
            e.currentTarget.checked = false;
            setIsChecked(false);
            return;
        }
        setIsChecked(true);
    }

    //Function to receive values for inputs in Check Ins
    //Maybe pass props back up to parent component with values inserted
    //Add optional value prop to interface to store this value in CheckIn
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
            <form onSubmit={handleSubmit}>
                {mapToDisplayChecks}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CheckIns