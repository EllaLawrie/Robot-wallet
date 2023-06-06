/* eslint-disable react/prop-types */
import './action.css'

export default function Action({ svgIcon, altText, text }) {
  return (
    <div className='actions-box'>
      <div className='actions'>
        <img src={svgIcon} alt={altText} />
        <p>{text}</p>
      </div>
    </div>
  )
}
