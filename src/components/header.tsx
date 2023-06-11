import styled from "styled-components"
import Image from 'next/image'
import { useState } from "react"

interface DrawerProps {
  open: number;
}

const Drawer = styled.div<DrawerProps>`
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: ${props => props.open}px;
  position: fixed;
  background-color: ${props => props.theme.colors.primary};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
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

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacer}px;
`

const HumburgerContainer = styled.div``

const LogoContainer = styled.div`
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
`

export const Header = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = () => {
    setOpen(250)
  }

  const handleClose = () => {
    setOpen(0)
  }

  return <HeaderContainer>
    <Drawer open={open}>
      <CloseBtn onClick={handleClose}>x</CloseBtn>
    </Drawer>
    <HumburgerContainer>
      <Image src="/icons/Hamburger.png" alt="hamburger" width={20} height={12} onClick={handleOpen} />
    </HumburgerContainer>
    <LogoContainer>
      <Image src="/icons/Logo.svg" alt="logo" width={97.83} height={22.81} />
    </LogoContainer>
  </HeaderContainer>
}