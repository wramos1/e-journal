import Link from 'next/link'
import React, { useState } from 'react'
import CheckIns from '../../components/CheckIns'
import ModalForm from '../../components/modalform'
import { CheckIn } from '../../components/modalform'

const index = () => {

    //Boolean state to show form
    const [showForm, setShowForm] = useState<boolean>(false);

    //State Array to hold array of CheckIns
    const [checks, setChecks] = useState<CheckIn[]>([]);

    //Parent method that sets state array of CheckIns based on child callback method
    const sendCheckIns = (checks: CheckIn[]) => {
        setChecks(checks)
        toggleModal();
    }

    //Opens Modal and adds class to ModalRoot
    const toggleModal = () => {
        setShowForm(!showForm)
        if (showForm) {
            document.querySelector('#modal-root')!.classList.remove('scale-1')
            document.querySelector('#modal-root')!.classList.add('scale-0')
        }
        else {
            document.querySelector('#modal-root')!.classList.add('scale-1')
            document.querySelector('#modal-root')!.classList.remove('scale-0')
        }
    }

    return (
        <div className='h-screen relative'>

            <h1 className='title'>
                Daily Check Ins
            </h1>

            <button onClick={() => toggleModal()} className="right-5 absolute p-2 border-neutral-900 border border-solid rounded-lg">
                {showForm ? 'Close' : 'Add Check Ins'}
            </button>

            <ModalForm
                show={showForm}
                onCloseForm={() => toggleModal()} onSubmitCheckIns={sendCheckIns}
            />
            <div className='py-10'>
                {checks.length > 0 &&
                    <CheckIns checks={checks} />
                }
            </div>
        </div>
    )
}

export default index