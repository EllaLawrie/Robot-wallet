import './newsdetails.css'

import userIcon from '../../assets/icons/user.svg'
import clockIcon from '../../assets/icons/clock.svg'

import heart from '../../assets/images/heart.png'
import BackButton from '../../components/backButton/BackButton'

export default function NewsDetails() {
  return (
    <section className='news-section details-container'>
      <div className='btn-heart-box'>
        <BackButton />
        <div className='heart-wrapper'>
          <img src={heart} alt='Heart' />
        </div>
      </div>
      <div className='display-details-section'>
        <div className='display-title-content'>
          <h2>Participate in the Corra Finance Airdrop on CoinMarketCap</h2>
          <hr />
          <div className='bottom-content'>
            <div className='user-content'>
              <img src={userIcon} alt='User icon' />
              <p>Johny Doe</p>
            </div>
            <span className='time-box'>
              <img src={clockIcon} alt='Clock icon' />
              <p>3 days ago</p>
            </span>
          </div>
        </div>

        <div className='main-details'>
          <p>
            CoinMarketCap is currently hosting an airdrop with Corra.Finance. In
            this airdrop, there are 600 CORA up for grabs, and there will be
            2,000 winners. For more information about crypto airdrops in general
          </p>
          <p>
            To participate in the Corra Finance airdrop, head over to the Corra
            Finance coin page on CoinMarketCap.
          </p>
          <p>
            When you are there, scroll down to see the list of instructions for
            participating in the airdrop. The most important first step is to
            login to your CoinMarketCap account.
          </p>
        </div>
      </div>
    </section>
  )
}
