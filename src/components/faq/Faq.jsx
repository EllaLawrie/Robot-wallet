/* eslint-disable react/prop-types */
import './faq.css'

export default function Faq({ image, altText, text }) {
  return (
    <div className='faq-content'>
      <img src={image} alt={altText} />
      <p>{text}</p>
    </div>
  )
}
