import './faqpage.css'

import News from '../../components/news/News'

import etheriumIcon from '../../assets/icons/etherium.svg'
import clockIcon from '../../assets/icons/clock.svg'

import displayImage from '../../assets/images/faq-display.png'
import newsImage2 from '../../assets/images/news-image2.png'
import newsImage3 from '../../assets/images/news-image3.png'
import BackButton from '../../components/backButton/BackButton'

export default function FaqPage() {
  return (
    <section className='news-container'>
      <header>
        <h1>FAQ</h1>
        <BackButton />
      </header>

      <div className='display-news-section faq'>
        <img className='display-image' src={displayImage} alt='News image' />
        <div className='coin-title'>
          <img src={etheriumIcon} alt='Etherium icon' />
          <p>Etherium</p>
        </div>
      </div>

      <div className='display-description'>
        <p>Participate in the Corra Finance Airdrop on CoinMarketCap</p>
        <span className='time-box'>
          <img src={clockIcon} alt='Clock icon' />
          <p>3 days ago</p>
        </span>
      </div>

      <div className='faq-types'>
        <div className='faq-type type-one'>Crypto</div>
        <div className='faq-type type-two'>Virtual card</div>
        <div className='faq-type type-three'>Giftcard</div>
      </div>

      <div className='all-news-section'>
        <div className='all-news-wrapper'>
          <News
            image={newsImage2}
            altText='News image'
            text='Bitcoin Surpasses $40k With On-Chain Indicators Turning Bullish'
          />
          <News
            image={newsImage3}
            altText='News image'
            text='CoinMarketCap APAC Influencer(KOL) Content Policy'
          />
        </div>
      </div>
    </section>
  )
}
