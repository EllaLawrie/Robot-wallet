import './newsdetails.css'

import userIcon from '../../assets/icons/user.svg'
import clockIcon from '../../assets/icons/clock.svg'

import heart from '../../assets/images/heart.png'
import BackButton from '../../components/backButton/BackButton'

import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import getDateDifference from '../../utils/getDateDifference'

export default function NewsDetails() {
  const { id } = useParams()

  const allNews = useFetchData(
    'http://ec2-3-231-77-121.compute-1.amazonaws.com:3000/api/v1/news'
  )
  // console.log(allNews.data);
  const news = allNews.data.find((news) => news._id === id)
  // console.log(news);

  if (allNews.isLoading) {
    return (
      <div className='loading'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  if (allNews.error) {
    return <p className='error'>Something went wrong...</p>
  }

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
          <h2>{news?.title}</h2>
          <hr />
          <div className='bottom-content'>
            <div className='user-content'>
              <img src={userIcon} alt='User icon' />
              <p>{news?.author ? news?.author : 'Johnny Doe'}</p>
            </div>
            <span className='time-box'>
              <img src={clockIcon} alt='Clock icon' />
              <p>{getDateDifference(news?.createdAt)}</p>
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
          {/* <p>{news?.content}</p> */}
        </div>
      </div>
    </section>
  )
}
