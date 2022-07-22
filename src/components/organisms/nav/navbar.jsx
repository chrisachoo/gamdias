import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../index'
import { RiMenu2Fill, RiCloseFill, RiUser3Fill } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  let navigate = useNavigate()
  const toSignin = () => {
    navigate('signin')
  }

  return (
    <div className='navbar navbar__padding fixed-top-nav'>
      <div className='navbar__menu'>
        {toggle
          ? <RiCloseFill color='#152632' size={20} onClick={() => setToggle(false)} />
          : <RiMenu2Fill color='#152632' size={20} onClick={() => setToggle(true)} />
        }
        {toggle && (
          <div className='navbar__menu-links'>
            <div className='navbar__menu-links__container'>
              <li><Link to='/game'>Games</Link></li>
              <li><Link to='/shop'>Shop</Link></li>
              <li><Link to='/forum'>Forum</Link></li>
            </div>
          </div>
        )}
      </div>
      <div className='navbar__logo'>
        <p><Link to='/'>Gamdiaz</Link></p>
      </div>
      <div className='navbar__links'>
        <div className='navbar__links-container'>
          <li><Link to='/game'>Games</Link></li>
          <li><Link to='/game'>Shop</Link></li>
          <li><Link to='/forum'>Forum</Link></li>
        </div>
      </div>
      <div className='navbar__button'>
        <PrimaryButton label={`Signin`} onClick={() => toSignin()} />
      </div>
      <div className='navbar__profile'>
          <RiUser3Fill color='#152632' size={20}/>
      </div>
    </div>
  )
}

export default Navbar