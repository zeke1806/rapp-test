import styled from "styled-components"
import Image from 'next/image'

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.padding}px;
`

const HumburgerContainer = styled.div``

const LogoContainer = styled.div`
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
`

export const Header = () => {
  return <HeaderContainer>
    <HumburgerContainer>
      <Image src="/icons/Hamburger.png" alt="hamburger" width={20} height={12} />
    </HumburgerContainer>
    <LogoContainer>
      <Image src="/icons/Logo.svg" alt="logo" width={97.83} height={22.81} />
    </LogoContainer>
  </HeaderContainer>
}