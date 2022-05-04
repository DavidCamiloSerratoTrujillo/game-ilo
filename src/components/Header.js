import React from 'react'
import logo from '../assets/images/newHoumLogo.svg'
export const Header = () => {
  return (
    <header className="navbar shadow-sm p-3 mb-5 bg-body rounded">
  <div className=" container">
      <img
        src={logo}
        alt="HOUMLogo"
      />
  </div>
</header>
  )
}
