import './signuppagenumber.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { useState } from 'react'
import BackButton from '../../components/backButton/BackButton'

export default function SignUpNumberPage() {
  const [countryCode, setCountryCode] = useState('')
  return (
    <section className='signup-number-container'>
      <div className='back-btn-box'>
        <BackButton />
      </div>

      <h1 className='signup-number-heading'>Enter your phone number</h1>

      <div className='input-number-box'>
        {/* <select name='' id=''>
          <option value=''>+234</option>
        </select> */}

        <div className='phone-select-box'>
          <PhoneInput
            inputClass='input'
            country={'us'}
            value={countryCode}
            onChange={(phone) => {
              console.log(phone)
              setCountryCode(phone)
            }}
          />
        </div>
        {/* <input type='number' /> */}
      </div>
    </section>
  )
}
