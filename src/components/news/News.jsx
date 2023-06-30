/* eslint-disable react/prop-types */
import './news.css'
import clockIcon from '../../assets/icons/clock.svg'

import getDateDifference from '../../utils/getDateDifference'

export default function News({ image, altText, text, time }) {
  return (
    <div className='news-content'>
      <img src={image} alt={altText} />
      <div>
        <p>{text}</p>
        <span className='time-box'>
          <img src={clockIcon} alt='Clock icon' />
          <p>{getDateDifference(time)}</p>
        </span>
      </div>
    </div>
  )
}
