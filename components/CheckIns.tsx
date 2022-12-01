import React, { useState } from 'react'
import CheckIn from '../types/CheckIn'

interface CheckIns {
    check: CheckIn
}

const CheckIns = ({ check }: CheckIns) => {
    const { name, type } = check
    //Boolean state to see is button has been checked
    const [isChecked, setIsChecked] = useState<boolean>(false);

    //State to hold value of text check 
    const [value, setValue] = useState<string>('');

    //Function to allow select/deselect of button clicked
    const onSelectRadioButton = (e: React.MouseEvent<HTMLInputElement>) => {
        if (isChecked) {
            e.currentTarget.checked = false;
            setIsChecked(false);
            check.value = false;
            return;
        }
        setIsChecked(true);
        check.value = true;
    };

    return (type === 'radio' ?
        (
            <div>
                <label htmlFor={name}>{name}</label>
                <input id={name} type='radio' onClick={(e) => onSelectRadioButton(e)} />
            </div>

        )
        :
        (
            <div>
                <label htmlFor={name}>{name}</label>
                <input value={value} id={name} type='text' onChange={(e) => setValue(e.target.value)} />
            </div>
        ))
}

export default CheckIns