import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from '../../styled-elements/navbar.elements'
import { Button } from '../../styled-elements/global.styles'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon />
            GAMDIAS
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/games'>Games</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/shop'>Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/forum'>Forum</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/signin'>
                  <Button primary>SIGN IN</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/signup'>
                  <Button fontBig primary>SIGN UP</Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar