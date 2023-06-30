import { useEffect } from 'react'
import './newspage.css'
import BackButton from '../../components/backButton/BackButton'

import News from '../../components/news/News'
import achainIcon from '../../assets/icons/achain.svg'
import clockIcon from '../../assets/icons/clock.svg'
import binanceIcon from '../../assets/icons/bitcoinbinancesvg.svg'

import newsImage1 from '../../assets/images/news-image1.png'
import newsImage2 from '../../assets/images/news-image2.png'
import newsImage3 from '../../assets/images/news-image3.png'
import { Link } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import getRandomImage from '../../utils/getRandomImage'

export default function NewsPage() {
  const allNews = useFetchData(
    'http://ec2-3-231-77-121.compute-1.amazonaws.com:3000/api/v1/news'
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const newsImages = [newsImage1, newsImage2, newsImage3]

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
        <div className='news-page__display-image'></div>
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
          {allNews.isLoading && (
            <div className='all-news-loader'>
              <div className='lds-ripple'>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          {allNews.error && (
            <p className='all-news-error'>No news at the moment</p>
          )}
          {allNews.data.length > 0 &&
            allNews.data.map((news) => {
              const newsImage = getRandomImage(newsImages)
              return (
                <Link to={`/news-details/${news._id}`} key={news._id}>
                  <News
                    image={newsImage}
                    altText={news.title}
                    text={news.title}
                    time={news.createdAt}
                    key={news._id}
                  />
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
