import { useState, useEffect } from 'react'
// Components
import Pricebox from '../../components/pricebox/Pricebox'
import Action from '../../components/actions/Action'
import News from '../../components/news/News'
import Faq from '../../components/faq/Faq'

// SVGs
import playStoreIcon from '../../assets/icons/googleplaystore.svg'
import appleStoreIcon from '../../assets/icons/applestoreIcon.svg'
import convertIcon from '../../assets/icons/convert.svg'
import twoArrowsIcon from '../../assets/icons/twoarrows.svg'
import starIcon from '../../assets/icons/star.svg'
import compareIcon from '../../assets/icons/compare.svg'
import priceAlertIcon from '../../assets/icons/price alert.svg'
import binanceIcon from '../../assets/icons/bitcoinbinancesvg.svg'
import greenUpArrow from '../../assets/icons/greenarrowup.svg'
import redArrowDown from '../../assets/icons/redarrowdown.svg'
import blueUpArrow from '../../assets/icons/bluearrowup.svg'
import blueDownArrow from '../../assets/icons/bluearrowdown.svg'
import usaIcon from '../../assets/icons/usa.svg'
import botIcon from '../../assets/icons/little-bot.svg'
import masterCardIcon from '../../assets/icons/Mastercard-Logo 1.svg'

// Images
import robotOne from '../../assets/images/robot1.png'
import robotTwo from '../../assets/images/robot2.png'
import robotThree from '../../assets/images/robot3.png'
import usdtLogo from '../../assets/images/tether-usdt-logo.png'
import amazonImage from '../../assets/images/amazon.png'
import ebayImage from '../../assets/images/ebay.png'
import iTunesImage from '../../assets/images/iTunes.png'
import newsImage1 from '../../assets/images/news-image1.png'
import newsImage2 from '../../assets/images/news-image2.png'
import newsImage3 from '../../assets/images/news-image3.png'
import faqImage1 from '../../assets/images/faq-image1.png'
import faqImage2 from '../../assets/images/faq-image2.png'
import whatsappImage from '../../assets/images/whatsapp.png'
import callImage from '../../assets/images/call.png'
import liveChatImage from '../../assets/images/livechat.png'
import telegramImage from '../../assets/images/telegram.png'

import './homepage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [allNews, setAllNews] = useState([]);
  const [prices, setPrices] = useState([])

  // const apiKey =  "6cbbe406-4236-413b-8fc3-edd8a9ae6793";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(
          `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${
            import.meta.env.VITE_API_KEY
          }`
        )
        // console.log(res.data)
        setIsLoading(false)
        setPrices([res.data.data[0], res.data.data[2]])
      } catch (error) {
        setIsLoading(false)
        setError(error.response.data.message)
      }
    }
    fetchData()
  }, [])

  // console.log(prices)

  return (
    <main className='home container'>
      <section className='first-box'>
        <button className='googleplay box'>
          <img src={playStoreIcon} alt='Google Playstore icon' />
          Google play
        </button>
        <button className='appstore box'>
          <img src={appleStoreIcon} alt='Apple app store icon' />
          App store
        </button>
      </section>

      <section className='second-box'>
        <p>
          Join <span className='bitscard-text'>Bitscard</span> to Send, spend,
          bank, and trade gift cards or crypto
        </p>
        <div className='btns-wrapper'>
          <Link to='/signup-number'>
            <button className='btn'>Sign Up</button>
          </Link>
          <Link to='/signup-number'>
            <button className='btn'>Login</button>
          </Link>
          <img className='robot-one' src={robotOne} alt='Robot one' />
        </div>
      </section>

      <section className='section third-box'>
        <h2 className='section-title'>Price Alerts</h2>
        <div className='price-box-wrapper'>
          {isLoading && <p>Loading...</p>}
          {error && <p>No prices at the moment</p>}
          {prices.length > 0 &&
            prices.map((price) => (
              <Pricebox
                key={price.id}
                icon={price.slug === 'bitcoin' ? binanceIcon : usdtLogo}
                crypto={price.symbol}
                rate={price.quote.USD.percent_change_24h}
                price={price.quote.USD.price}
                altText={price.name}
                arrowIcon={
                  price.quote.USD.percent_change_24h > 0
                    ? greenUpArrow
                    : redArrowDown
                }
              />
            ))}
        </div>
        {prices.length == 0 && !isLoading && <p>No prices at the moment</p>}
      </section>

      <section className='section fourth-box'>
        <h2 className='section-title'>Actions</h2>
        <div className='actions-wrapper'>
          <Action
            svgIcon={convertIcon}
            altText='Convert icon'
            text='Trade giftcard'
          />
          <Action
            svgIcon={twoArrowsIcon}
            altText='Two arrows icon'
            text='Pay bills'
          />
          <Action svgIcon={starIcon} altText='Star icon' text='P2P Trading' />
          <Action
            svgIcon={twoArrowsIcon}
            altText='Two arrows icon'
            text='USD Account'
          />
          <Action
            svgIcon={compareIcon}
            altText='Compare icon'
            text='Virtual Card'
          />
          <Action
            svgIcon={priceAlertIcon}
            altText='Price alert icon'
            text='Crypto trade'
          />
        </div>
      </section>

      <section className='section fifth-box'>
        <h2 className='section-title'>Crypto rate</h2>
        <div className='crypto-rates-wrapper'>
          <div className='crypto-rates'>
            <img src={binanceIcon} alt='Bitcoin binance icon' />
            <div className='crypto-rate'>
              <div>
                <p>BUY</p>
                <span>
                  <img src={greenUpArrow} alt='Green up arrow' />
                  752.2/$
                </span>
              </div>
              <div>
                <p>SELL</p>
                <span>
                  <img src={blueDownArrow} alt='Blue down arrow' />
                  742.3/$
                </span>
              </div>
            </div>
          </div>
          <div className='crypto-rates'>
            <div className='usdt-logo-wrapper'>
              <img src={usdtLogo} alt='Tether USDT logo' />
            </div>
            <div className='crypto-rate'>
              <div>
                <p>BUY</p>
                <span>
                  <img src={greenUpArrow} alt='Green up arrow' />
                  752.2/$
                </span>
              </div>
              <div>
                <p>SELL</p>
                <span>
                  <img src={blueDownArrow} alt='Blue down arrow' />
                  742.3/$
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section sixth-box'>
        <h2 className='section-title'>Giftcard</h2>
        <div className='giftcards-wrapper'>
          <img src={amazonImage} alt='Amazon card' />
          <img src={ebayImage} alt='Ebay card' />
          <img src={iTunesImage} alt='iTunes card' />
        </div>
      </section>

      <section className='section seventh-box'>
        <div className='title-content'>
          <h2 className='section-title'>Exchange rate</h2>
          <p className='see-all-text'>See all</p>
        </div>
        <div className='exchange-rate-wrapper'>
          <div className='usd-content'>
            <img src={usaIcon} alt='USA icon' />
            <p>USD</p>
          </div>
          <div className='exchange-prices'>
            <p>BUY</p>
            <p>SELL</p>
          </div>
          <div className='exchange-prices'>
            <div className='exchange-price'>
              <img src={greenUpArrow} alt='Green up arrow' />
              <p>$752.2/$</p>
            </div>
            <div className='exchange-price'>
              <img src={blueUpArrow} alt='Blue up arrow' />
              <p>$742.3/$</p>
            </div>
          </div>
        </div>
      </section>

      <section className='section eighth-box'>
        <h3 className='section-title'>Create virtual card</h3>
        <div className='inner-box'>
          <img src={botIcon} alt='Little bot icon' />
          <p>Start</p>
          <img src={masterCardIcon} alt='Mastercard icon' />
        </div>
        <img className='robot-two' src={robotTwo} alt='Robot two' />
      </section>

      <section className='section ninth-box'>
        <div className='title-content'>
          <h2 className='section-title'>News</h2>
          <Link to='/news'>
            <p className='see-all-text'>See all</p>
          </Link>
        </div>
        <div className='news-wrapper'>
          <Link to='/news-details/1'>
            <News
              image={newsImage1}
              altText='News image 1'
              text='Participate in the Corra Finance Airdrop on CoinMarketCap'
            />
          </Link>
          <Link to='/news-details/2'>
            <News
              image={newsImage2}
              altText='News image 2'
              text='Bitcoin Surpasses $40k With On-Chain Indicators Turning Bullish'
            />
          </Link>
          <Link to='/news-details/3'>
            <News
              image={newsImage3}
              altText='News image 3'
              text='CoinMarketCap APAC Influencer(KOL) Content Policy'
            />
          </Link>
        </div>
      </section>

      <section className='section tenth-box'>
        <div className='title-content'>
          <h2 className='section-title'>FAQ</h2>
          <Link to='/faq'>
            <p className='see-all-text'>See all</p>
          </Link>
        </div>
        <div className='faqs-wrapper'>
          <Link to='/faq-details/1'>
            <Faq
              image={faqImage1}
              altText='FAQ image 1'
              text='Participate in the Corra Finance Airdrop on CoinMarketCap'
            />
          </Link>
          <Link to='/faq-details/2'>
            <Faq
              image={faqImage2}
              altText='FAQ image 2'
              text='Participate in the Corra Finance Airdrop on CoinMarketCap'
            />
          </Link>
        </div>
      </section>

      <section className='section eleventh-box'>
        <h3 className='section-title'>Support</h3>
        <div className='socials-wrapper'>
          <a href='https://wa.link/gy2buh'>
            <div className='socials'>
              <img src={whatsappImage} alt='Whatsapp image' />
              <p>whatsapp</p>
            </div>
          </a>
          <a href='tel:012293581'>
            <div className='socials'>
              <img src={callImage} alt='Call image' />
              <p>Call</p>
            </div>
          </a>
          <a>
            <div className='socials'>
              <img src={liveChatImage} alt='Live chat image' />
              <p>Live chat</p>
            </div>
          </a>
          <a href='https://t.me/bitscardcomm'>
            <div className='socials'>
              <img src={telegramImage} alt='Telegram image' />
              <p>Telegram</p>
            </div>
          </a>
        </div>
        <img className='robot-three' src={robotThree} alt='Robot three' />
      </section>
    </main>
  )
}
