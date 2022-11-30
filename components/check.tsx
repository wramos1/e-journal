import React, { useEffect, useState } from 'react'
import { CheckIn } from './modalform';

interface CheckProps {
    check: CheckIn,
    deleteCheck: (id: string) => void,
    editCheck: (value: string, i: number) => void,
    position: number
}

const Check = ({ check, editCheck, deleteCheck, position }: CheckProps) => {
    //Boolean state to check if edit button is clicked
    const [isEditing, setIsEditing] = useState<boolean>(false);

    //String state to hold name of new Check In
    const [checkIn, setCheckIn] = useState<string>('');

    //Destructures name and id from Check In 
    const { name, id, type } = check;

    //useEffect hook to check whenever edit button is clicked to put event listener on body to close edit when body is clicked
    useEffect(() => {
        if (isEditing) {
            document.body.addEventListener('click', closeEdit)

            return () => {
                document.body.removeEventListener('click', closeEdit)
            }
        }
    }, [isEditing])

    //Function to check if modal is clicked so that it does not register as a body click which would close the edit 
    const modal = document.querySelector('#modal-root');

    const closeEdit = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target !== modal || target.classList.contains('edit-btn')) {
            return;
        }
        else {
            setIsEditing(!isEditing)
        }
    };

    //Callback method to update a CheckIn
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editCheck(checkIn, position);
        setIsEditing(false);
    }

    //Conditionally renders either the li or a form to update CheckIn based on whether edit is clicked
    return (
        !isEditing ?

            <li className='check'>
                <h1>
                    {name}
                    <small className='flex items-start align-top self-start'>
                        {type === 'radio' ? 'Button' : 'Text Box'}
                    </small>
                </h1>

                <div className='flex justify-around w-1/5'>
                    <button
                        className='button text-red-600'
                        onClick={() => deleteCheck(id)}
                    >
                        X
                    </button>

                    <button
                        className='button text-green-600'
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        Edit
                    </button>
                </div>

            </li>
            :
            <div className='check'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        defaultValue={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckIn(e.currentTarget.value)}
                        className='inputs'
                    />
                </form>

                <button
                    className='button text-red-600'
                    onClick={() => setIsEditing(!isEditing)}
                >
                    Stop Editing
                </button>
            </div>

    )
}

export default Check;