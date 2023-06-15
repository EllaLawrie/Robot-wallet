import './signuppagenumber.css'
import { phoneCodes } from '../../data/phoneCodes.jsx'

import BackButton from '../../components/backButton/BackButton'
import Modal from '../../components/modal/Modal'
import { useState } from 'react'

export default function SignUpNumberPage() {
  const [selectedCode, setSelectedCode] = useState('+234')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedCode, phoneNumber)
    if (e.key === 'Enter') {
      setShowModal(true)
    }
  }

  return (
    <section className='signup-number-container'>
      {showModal && <Modal handleModal={setShowModal} />}
      <div className='back-btn-box'>
        <BackButton />
      </div>

      <h1 className='signup-number-heading'>Enter your phone number</h1>

      <div className='input-number-box'>
        <div className='select-container'>
          <select
            name='phoneCodes'
            id=''
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
          >
            {phoneCodes.map((code) => (
              <option key={code.label} value={code.value}>
                {code.value}
              </option>
            ))}
          </select>
        </div>
        <input
          type='tel'
          // pattern="[0-9]*"
          enterKeyHint='enter'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyUp={handleSubmit}
        />
      </div>
    </section>
  )
}
