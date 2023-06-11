import styled from "styled-components"
import Image from 'next/image'
import { useState } from "react"

interface DrawerProps {
  open: number;
}

interface LogoProps {
  inDrawer?: boolean
}

const NavData = ['SMART SLEEP COACH', 'UPGRADE TO PRO', 'SLEEP PLANS', 'REVIEWS',  'FAQs']

const Drawer = styled.div<DrawerProps>`
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: ${props => props.open}%;
  position: fixed;
  background-color: ${props => props.theme.colors.primary};
  overflow-x: hidden;
  transition: 0.5s;
  text-align: center;
  white-space: nowrap;
`

const CloseBtn = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 36px;
  margin-left: 50px;
  color: white;
  padding: 20px;
`

const SignInBtnStyle = styled.button`
  border: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacer * 3}px;
  background-color: transparent;
  color: white;
`

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacer}px;
`

const HumburgerContainer = styled.div``

const LogoContainer = styled.div<LogoProps>`
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
  ${props => props.inDrawer && `
    margin-top: ${props.theme.spacer}px;
    margin-bottom: ${props.theme.spacer}px;
  `}
`

const NavContainer = styled.div``

const NavItem = styled.a`
  display: block;
  color: white;
  text-align: left;
  margin-left: ${props => props.theme.spacer}px;
  margin-bottom: ${props => props.theme.spacer}px;
`

const Navigation = () => {
  return <NavContainer>
    {
      NavData.map((elt, i) => (<NavItem key={i}>{elt}</NavItem>))
    }
  </NavContainer>
}

const SignInBtn = () => {
  return <SignInBtnStyle>
    <p>SIGN IN or REGISTER</p>
  </SignInBtnStyle>
}

const Logo = (props: LogoProps) => {
  return <LogoContainer {...props}>
  <Image src="/icons/Logo.svg" alt="logo" width={97.83} height={22.81} />
</LogoContainer>
}

export const Header = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = () => {
    setOpen(90)
  }

  const handleClose = () => {
    setOpen(0)
  }

  return <HeaderContainer>
    <Drawer open={open}>
      <Logo inDrawer />
      <CloseBtn onClick={handleClose}>x</CloseBtn>
      <SignInBtn /> 
      <Navigation />
    </Drawer>
    <HumburgerContainer>
      <Image src="/icons/Hamburger.png" alt="hamburger" width={20} height={12} onClick={handleOpen} />
    </HumburgerContainer>
    <Logo />
  </HeaderContainer>
}