import styled from "styled-components"
import { Button } from "./button"

const MainBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url('/images/home-banner1-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 578px;
  padding-left: ${props => props.theme.spacer}px;
  padding-right: ${props => props.theme.spacer}px;
`

const ContentContainer = styled.div`
  background-color: rgba(58, 58, 60, 0.38);
  box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.3);
  padding-left: ${props => props.theme.spacer}px;
  padding-right: ${props => props.theme.spacer}px;
  padding-top: ${props => props.theme.spacer}px;
  padding-bottom: ${props => props.theme.spacer * 2}px;
  margin-bottom: ${props => props.theme.spacer}px;
  border-radius: ${props => props.theme.radius}px;
`

const TextTitle = styled.p`
  color: white;
  font-size: 32px;
  line-height: 45px;
  margin-bottom: ${props => props.theme.spacer}px;
`

const MainBannerButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacer}px;
`

const TextContent = styled.p`
  color: white;
`

export const MainBanner = () => {
  return <MainBannerContainer>
    <ContentContainer>
      <TextTitle>Your baby can be a super sleeper</TextTitle>
      <TextContent>Lumi’s app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days</TextContent>
    </ContentContainer>
    <MainBannerButton>GET STARTED</MainBannerButton>
  </MainBannerContainer>
}