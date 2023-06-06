import './modal.css'
import robotFour from '../../assets/images/robot4.png'
import playStoreIcon from '../../assets/icons/googleplaystore.svg'
import appleStoreIcon from '../../assets/icons/applestoreIcon.svg'

export default function Modal() {
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
        <button className='modal-btn'>Okay</button>
      </div>
    </div>
  )
}
