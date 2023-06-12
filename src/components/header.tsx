import styled from "styled-components"
import Image from 'next/image'
import { useContext, useState } from "react"
import { BreakpointContext } from "./styles/use-breakpoint";

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

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    display: none;
  }
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
  cursor: pointer;
  font-size: 16px;
  border: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacer * 3}px;
  background-color: transparent;
  color: white;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    margin: 0;
  }
`

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacer}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    padding-left: ${props => props.theme.spacer * 4}px;
    padding-right: ${props => props.theme.spacer * 4}px;
  }
`

const HumburgerContainer = styled.div`
  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    display: none;
  }
`

const LogoContainer = styled.div<LogoProps>`
  margin-left: auto;
  margin-right: auto;
  ${props => props.inDrawer && `
    margin-top: ${props.theme.spacer}px;
    margin-bottom: ${props.theme.spacer}px;
  `}

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    margin-left: initial;
    margin-right: initial;
  }
`

const NavContainer = styled.div`
  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const NavItem = styled.a`
  cursor: pointer;
  font-size: 16px;
  display: block;
  color: white;
  text-align: left;
  margin-left: ${props => props.theme.spacer}px;
  margin-bottom: ${props => props.theme.spacer}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    margin-left: 0;
    margin-bottom: 0;
    padding-left: ${props => props.theme.spacer}px !important;
    padding-right: ${props => props.theme.spacer}px !important;
  }
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
    SIGN IN or REGISTER
  </SignInBtnStyle>
}

const Logo = (props: LogoProps) => {
  const breakpoint = useContext(BreakpointContext)
  const width = breakpoint === 'desktop' ? 97.83 * 1.5 : 97.83;
  const height = breakpoint === 'desktop' ? 22.81 * 1.5 : 22.81;
  return <LogoContainer {...props}>
  <Image src="/icons/Logo.svg" alt="logo" width={width} height={height} />
</LogoContainer>
}

export const Header = () => {
  const breakpoint = useContext(BreakpointContext)
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
    {breakpoint === 'desktop' && <Navigation />}
    {breakpoint === 'desktop' && <SignInBtn />}
  </HeaderContainer>
}