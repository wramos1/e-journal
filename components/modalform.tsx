import React from 'react'
import { useState } from 'react';
import Check from './check';
import { v4 as getId } from 'uuid'
import ReactDOM from 'react-dom';

export interface CheckIn {
    name: string;
    type: string;
    id: string;
}

interface ModalProps {
    show: boolean;
    onCloseForm: () => void
    onSubmitCheckIns: (checks: CheckIn[]) => void
}

const ModalForm = ({ show, onCloseForm, onSubmitCheckIns }: ModalProps) => {
    //State for Array of CheckIns
    const [dynamicProps, setDynamicProps] = useState<CheckIn[]>([]);

    //State for Check Name
    const [checkIn, setCheckIn] = useState<string>('');

    //State for type of input for Check in
    const [type, setType] = useState<string>('radio');

    //Function for Submitting Check In into state array of Check Ins
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //Checks if name of Check In exists by flattening dynamicProps and using some to compare name value
        if (dynamicProps.flat().some((a) => a.name === checkIn)) {
            console.log(dynamicProps.flat())
            alert('Check In already exists')
            return;
        }

        //Spreads dynamicProps state in order to submit Check In into array
        setDynamicProps([...dynamicProps,
        {
            name: checkIn,
            type: type,
            id: getId()
        }])

        //Resets input to empty string
        document.querySelector<HTMLInputElement>('#name')!.value = '';
    };

    //Callback method checks if there is an array and submits if there is to parent component level state
    const sendCheckIns = () => {
        if (dynamicProps) {
            onSubmitCheckIns(dynamicProps)
        }
    }

    //Parent method that filters CheckIn from child callback method
    const deleteCheck = (id: string) => {
        setDynamicProps(dynamicProps.filter(check => check.id !== id))
    }

    //Parent method that edits a CheckIn from child callback method
    const handleEdit = (value: string, i: number): void => {
        if (dynamicProps.flat().some((a) => a.name === value)) {
            alert('Check In already exists')
            return;
        }
        console.log(dynamicProps.flat())
        let modifiedArr = [...dynamicProps];
        let item = { ...modifiedArr[i], name: value }
        modifiedArr[i] = item;
        setDynamicProps(modifiedArr)
    }


    //Maps through CheckIns and sends props to Check Component
    const mapChecks = dynamicProps.length > 0 ? dynamicProps.map((check: CheckIn, i: number) => {
        return (
            <Check
                check={check}
                key={i}
                position={i}
                deleteCheck={deleteCheck}
                editCheck={handleEdit}
            />
        )
    }) : null;


    const form = show ? (
        <div className='bg-white w-4/5 flex flex-col h-full'>
            <button
                onClick={() => onCloseForm()}
                className='absolute right-5 top-5 text-2xl border border-white px-5 py-2 rounded-lg z-10'
            >
                X
            </button>

            <form
                className='flex justify-evenly items-center w-full p-8 text-white border-b border-black' //Add styles to put inputs at the top in a row direction and then for the checks to mapped in a column direction
                onSubmit={handleSubmit}
            >
                <label htmlFor="name" className='text-xl text-black'>
                    Name
                </label>
                <input
                    type="text"
                    id='name'
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="inputs"
                />

                <label htmlFor="type" className='text-xl text-black'>
                    Type
                </label>
                <select
                    name="type"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
                    className="inputs"
                >
                    <option
                        value="radio"
                    >
                        Button
                    </option>

                    <option
                        value="input"
                    >
                        Input
                    </option>
                </select>
            </form>

            <div>
                {mapChecks}
            </div>

            <button onClick={() => sendCheckIns()}>Create Check In</button>
        </div>
    ) : null;

    if (typeof window !== "undefined") {
        return ReactDOM.createPortal(
            form,
            document.querySelector('#modal-root')!
        )
    } else return null;
}

export default ModalForm