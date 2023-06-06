/* eslint-disable react/prop-types */
import './news.css'
import clockIcon from '../../assets/icons/clock.svg'

export default function News({ image, altText, text }) {
  return (
    <div className='news-content'>
      <img src={image} alt={altText} />
      <div>
        <p>{text}</p>
        <span className='time-box'>
          <img src={clockIcon} alt='Clock icon' />
          <p>3 days ago</p>
        </span>
      </div>
    </div>
  )
}
