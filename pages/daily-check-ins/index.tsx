import Link from 'next/link'
import React, { useState } from 'react'
import CheckIns from '../../components/CheckIns'
import ModalForm from '../../components/modalform'
import { CheckIn } from '../../components/modalform'

const index = () => {
    const [showForm, setShowForm] = useState<boolean>(false)
    const [checks, setChecks] = useState<CheckIn[]>([])

    const sendCheckIns = (checks: CheckIn[]) => {
        setShowForm(false);
        setChecks(checks)
    }

    return (
        <div>
            Daily Check Ins
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Close' : 'Add Check Ins'}
            </button>
            <ModalForm show={showForm} onCloseForm={() => setShowForm(false)} onSubmitCheckIns={sendCheckIns} />
            {checks.length > 0 &&
                <CheckIns checks={checks} />
            }
        </div>
    )
}

export default index