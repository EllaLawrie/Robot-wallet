/* eslint-disable react/prop-types */
import './pricebox.css'

export default function Pricebox({
  icon,
  crypto,
  rate,
  price,
  altText,
  arrowIcon,
}) {
  return (
    <div className='price-box'>
      <div className='inner-price-box'>
        <div className={crypto === 'USDT' ? 'usdt-logo-wrapper' : ''}>
          <img src={icon} alt={altText} />
        </div>
        <div className='section-title'>
          <p>{crypto}</p>
          <p>
            <img src={arrowIcon} alt='' />
            {rate}%
          </p>
        </div>
        <h3>{price}</h3>
      </div>
    </div>
  )
}
