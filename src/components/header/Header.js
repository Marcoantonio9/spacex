import React from 'react'
import './Header.scss'

const Header = () => {
  const [navbar, setNavbar] = React.useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 70){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <div className={navbar ? 'header active' : 'header'}>
      <div className="logo">
        <img src='/images/logo.png' />
      </div>
    </div>
  )
}

export default Header