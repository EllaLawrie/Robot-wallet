/* eslint-disable react/prop-types */

import './modal.css'
import robotFour from '../../assets/images/robot4.png'
import playStoreIcon from '../../assets/icons/googleplaystore.svg'
import appleStoreIcon from '../../assets/icons/applestoreIcon.svg'
import { useNavigate } from 'react-router-dom'

export default function Modal({ handleModal }) {
  const navigate = useNavigate()
  const handleClick = () => {
    handleModal(false)
    navigate('/')
  }
  return (
    <div className='modal'>
      <div className='inner-container'>
        <div className='hexagon'>
          <img src={robotFour} alt='Robot four' />
        </div>
        <p>Kindly download our app to continue</p>
        <section className='box-wrapper'>
          <button className='googleplay box'>
            <img src={playStoreIcon} alt='Google Playstore icon' />
            Google play
          </button>
          <button className='appstore box'>
            <img src={appleStoreIcon} alt='Apple app store icon' />
            App store
          </button>
        </section>
        <button className='modal-btn' onClick={handleClick}>
          Okay
        </button>
      </div>
    </div>
  )
}
