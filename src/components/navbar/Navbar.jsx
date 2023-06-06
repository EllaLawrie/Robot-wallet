import homeIcon from '../../assets/icons/homeicon.svg'
import chartIcon from '../../assets/icons/chart.svg'
import walletIcon from '../../assets/icons/walleticon.svg'
import newsIcon from '../../assets/icons/newsicon.svg'
import profileIcon from '../../assets/icons/profileicon.svg'

import './navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={homeIcon} alt='home icon' />
      <img src={chartIcon} alt='Chart icon' />
      <img src={walletIcon} alt='Wallet icon' />
      <img src={newsIcon} alt='News Icon' />
      <img src={profileIcon} alt='Profile icon' />
    </nav>
  )
}
