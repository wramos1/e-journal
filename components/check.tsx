import React, { useEffect, useState } from 'react'
import { CheckIn } from './modalform';

interface CheckProps {
    check: CheckIn,
    deleteCheck: (id: string) => void,
    editCheck: (value: string, i: number) => void,
    position: number
}

const Check = ({ check, editCheck, deleteCheck, position }: CheckProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [checkIn, setCheckIn] = useState<string>('')
    const { name, id } = check;

    useEffect(() => {
        if (isEditing) {
            document.body.addEventListener('click', closeEdit)
            return () => {
                document.body.removeEventListener('click', closeEdit)
            }
        }
    }, [isEditing])

    const formBtn = document.querySelector('#modal-root');

    const closeEdit = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === formBtn || formBtn!.contains(target) || target.classList.contains('edit-btn')) {
            return;
        } else {
            setIsEditing(!isEditing)
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editCheck(checkIn, position);
        setIsEditing(false)
    }

    return (
        !isEditing ?
            <li>
                {name}
                <button onClick={() => deleteCheck(id)}> X </button>
                <button className='edit-btn' onClick={() => setIsEditing(!isEditing)}> Edit </button>
            </li> :
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckIn(e.currentTarget.value)} />
                </form>
                <button className='edit-btn' onClick={() => setIsEditing(!isEditing)}> Edit </button>
            </div>

    )
}

export default Check;