import './faqdetails.css'

import userIcon from '../../assets/icons/user.svg'
import clockIcon from '../../assets/icons/clock.svg'
import BackButton from '../../components/backButton/BackButton'

import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'

export default function NewsDetails() {
  const { id } = useParams()

  const allFaqs = useFetchData(
    'http://ec2-3-231-77-121.compute-1.amazonaws.com:3000/faq'
  )
  // console.log(allFaqs.data);
  const faq = allFaqs.data.find((faq) => faq._id === id)
  // console.log(faq);

  if (allFaqs.isLoading) {
    return (
      <div className='loading'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  if (allFaqs.error) {
    return <p className='error'>Something went wrong...</p>
  }

  return (
    <section className='faq-section details-container'>
      <div className='btn-heart-box'>
        <BackButton />
      </div>
      <div className='display-details-section'>
        <div className='display-title-content'>
          <h2>{faq?.title}</h2>
          <hr />
          <div className='bottom-content'>
            <div className='user-content'>
              <img src={userIcon} alt='User icon' />
              <p>{faq?.author ? faq?.author : 'Johny Doe'}</p>
            </div>
            <span className='time-box'>
              <img src={clockIcon} alt='Clock icon' />
              <p>3 days ago</p>
            </span>
          </div>
        </div>

        <div className='main-details'>
          <p>{faq?.content}</p>
        </div>
      </div>
    </section>
  )
}
