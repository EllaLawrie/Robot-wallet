import homeIcon from '../../assets/icons/homeicon.svg'
import chartIcon from '../../assets/icons/chart.svg'
import walletIcon from '../../assets/icons/walleticon.svg'
import newsIcon from '../../assets/icons/newsicon.svg'
import profileIcon from '../../assets/icons/profileicon.svg'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={homeIcon} alt='Home icon' />
      </Link>
      <Link to='/'>
        <img src={chartIcon} alt='Chart icon' />
      </Link>
      <Link to='/'>
        <img src={walletIcon} alt='Wallet icon' />
      </Link>
      <Link to='/'>
        <img src={newsIcon} alt='News icon' />
      </Link>
      <Link to='/'>
        <img src={profileIcon} alt='Profile icon' />
      </Link>
    </nav>
  )
}
