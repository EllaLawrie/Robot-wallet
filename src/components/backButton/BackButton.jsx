import './backbutton.css'
import leftArrow from '../../assets/icons/leftarrow.svg'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <>
      <button className='back-btn' onClick={() => navigate(-1)}>
        <img src={leftArrow} alt='Left arrow' />
      </button>
    </>
  )
}
