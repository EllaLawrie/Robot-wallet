import './signuppagenumber.css'
import { phoneCodes } from '../../data/phoneCodes.jsx'

import BackButton from '../../components/backButton/BackButton'
import Modal from '../../components/modal/Modal'
import { useState } from 'react'

import halfCurvedEdge from '../../assets/images/half-curved-edge.png'
import halfCurvedEdgeLarge from '../../assets/images/half-curved-edge-large.png'
import robotFive from '../../assets/images/robot5.png'

export default function SignUpNumberPage() {
  const [selectedCode, setSelectedCode] = useState('+234')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedCode, phoneNumber)
    setShowModal(true)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(selectedCode, phoneNumber)
      setShowModal(true)
    }
  }

  return (
    <section className='signup-number-container'>
      {showModal && <Modal handleModal={setShowModal} />}
      <div className='back-btn-box'>
        <BackButton />
      </div>

      <img src={halfCurvedEdgeLarge} className='half-curved-edge-large' />
      <img src={halfCurvedEdge} className='half-curved-edge' />
      <img src={robotFive} className='robot-five' />

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
          enterKeyHint='enter'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>

      <div className='continue-btn-wrapper'>
        <button onClick={handleSubmit}>Continue</button>
      </div>
    </section>
  )
}
