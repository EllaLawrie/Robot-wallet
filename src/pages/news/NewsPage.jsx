import './newspage.css'

import News from '../../components/news/News'
import achainIcon from '../../assets/icons/achain.svg'
import clockIcon from '../../assets/icons/clock.svg'
import binanceIcon from '../../assets/icons/bitcoinbinancesvg.svg'

import displayImage from '../../assets/images/news-display.png'
import newsImage1 from '../../assets/images/news-image1.png'
import newsImage2 from '../../assets/images/news-image2.png'
import { Link } from 'react-router-dom'
import BackButton from '../../components/backButton/BackButton'

export default function NewsPage() {
  return (
    <section className='news-container'>
      <header>
        <h1>News</h1>
        <BackButton />
      </header>

      <div className='display-news-section'>
        <div className='title-wrapper'>
          <h2>
            <img src={achainIcon} alt='Achain icon' />
            Achain news
          </h2>
          <p>See all</p>
        </div>
        <img className='display-image' src={displayImage} alt='News image' />
      </div>

      <div className='display-description'>
        <p>Participate in the Corra Finance Airdrop on CoinMarketCap</p>
        <span className='time-box'>
          <img src={clockIcon} alt='Clock icon' />
          <p>3 days ago</p>
        </span>
      </div>

      <div className='all-news-section'>
        <h2>
          <img src={binanceIcon} alt='Binance icon' />
          News
        </h2>
        <div className='all-news-wrapper'>
          <Link to='/news-details/1'>
            <News
              image={newsImage1}
              altText='News image'
              text='Participate in the Corra Finance Airdrop on CoinMarketCap'
            />
          </Link>
          <Link to={'/news-details/2'}>
            <News
              image={newsImage2}
              altText='News image'
              text='Participate in the Corra Finance Airdrop on CoinMarketCap'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
