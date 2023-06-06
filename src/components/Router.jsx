import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/HomePage'
import NewsPage from '../pages/news/NewsPage'
import NewsDetailsPage from '../pages/newsDetails/NewsDetailsPage'
import FaqPage from '../pages/faq/FaqPage'
import FaqDetailsPage from '../pages/faqDetails/FaqDetailsPage'
import SignUpNumberPage from '../pages/signupNumber/SignUpNumberPage'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news-details/:id' element={<NewsDetailsPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/faq-details/:id' element={<FaqDetailsPage />} />
        <Route path='/signup-number' element={<SignUpNumberPage />} />
      </Routes>
    </>
  )
}
