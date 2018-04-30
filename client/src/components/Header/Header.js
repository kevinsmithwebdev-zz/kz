import React from 'react'

import './Header.css'
import kzLogo from '../../assets/images/ks-logo2.png'

const Header = () => {
  return (
    <div id='Header'>
      <img src={kzLogo} alt=""/>
      <span className="brand">Kaizen App</span>
    </div>
  )
}

export default Header
