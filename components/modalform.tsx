import React from 'react'
import { useState } from 'react';
import Check from './check';
import { v4 as getId } from 'uuid'
import ReactDOM from 'react-dom';

export interface CheckIn {
    name: string;
    id: string;
}

interface ModalProps {
    show: boolean;
    onCloseForm: () => void
    onSubmitCheckIns: (checks: CheckIn[]) => void
}

const ModalForm = ({ show, onCloseForm, onSubmitCheckIns }: ModalProps) => {
    const [dynamicProps, setDynamicProps] = useState<CheckIn[]>([]);
    const [checkIn, setCheckIn] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (dynamicProps.flat().some((a) => a.name === checkIn)) {
            alert('Check In already exists')
            return;
        }
        setDynamicProps([...dynamicProps,
        {
            name: checkIn,
            id: getId()
        }])
        document.querySelector<HTMLInputElement>('#name')!.value = '';
    };

    const sendCheckIns = () => {
        if (dynamicProps) {
            onSubmitCheckIns(dynamicProps)
        }
    }

    const deleteCheck = (id: string) => {
        setDynamicProps(dynamicProps.filter(check => check.id !== id))
    }

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
        <React.Fragment>
            <button onClick={() => onCloseForm()}>X</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={(e) => setCheckIn(e.target.value)} />
            </form>

            <div>
                {mapChecks}
            </div>

            <button onClick={() => sendCheckIns()}>Create Check In</button>
        </React.Fragment>
    ) : null;

    if (typeof window !== "undefined") {
        return ReactDOM.createPortal(
            form,
            document.querySelector('#modal-root')!
        )
    } else return null;
}

export default ModalForm