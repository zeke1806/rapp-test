import styled from "styled-components"
import { BolderText } from "./styles/bolder-text"
import { LighterText } from "./styles/ligher-text"
import { Button } from "./button"
import { MyImage, MyImageContainer } from "./styles/my-image"

const data = [
  {
    boldText: 'We coach. ',
    text: 'Our Pediatric sleep experts will take you step-by-step to sleep success'
  },
  {
    boldText: 'You log. ',
    text: 'Record your baby’s sleeps directly within the app'
  },
  {
    boldText: 'We analyze. ',
    text: 'Daily and weekly sleep insight reports measure your baby’s progress'
  }
]

const Container = styled.div`
  padding-top: ${(props) => props.theme.spacer}px;
  padding-left: ${(props) => props.theme.spacer}px;
  padding-right: ${(props) => props.theme.spacer}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    display: flex;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`

const ImageContainer = styled(MyImageContainer)`
  height: 290px;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    width: 50%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacer * 2}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    width: 50%;
    box-sizing: border-box;
    padding-left: 150px;
    padding-right: 150px;
  }
`

const Text1 = styled.h2`
  text-align: center;
  margin-top: ${props => props.theme.spacer * 2}px;
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const Text2 = styled(BolderText)`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const Text3 = styled.h2`
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacer * 2}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    font-size: 28px;
  }
`

const OrderedList = styled.ol`
  list-style-type: upper-alpha;
  padding-left: 30px;
  margin-bottom: ${props => props.theme.spacer * 2}px;
  color: ${props => props.theme.colors.two};
  font-size: 24px;
`;

const ListItem = styled.li`
  margin-left: 0;
`;

const HowItWorksBtn = styled(Button)`
  align-self: center;
`

export const HowItWorks = () => {
  return <Container>
    <ImageContainer>
      <MyImage src={'/images/how-it-works-mobile.jpg'} alt="how-it-works-mobile" />
    </ImageContainer>
    <TextContainer>
      <Text1>How it works</Text1>
      <Text2>Lumi&apos;s A, B, Cs, to better Zzzzs</Text2>
      <OrderedList>
        { data.map((elt, i) => (
          <ListItem key={i}>
            <LighterText>
              <BolderText as="span">{elt.boldText}</BolderText>
              {elt.text}
            </LighterText>
          </ListItem>
        )) }
      </OrderedList>
      <Text3>Zzzz your baby sleeps!</Text3>
      <HowItWorksBtn>GET STARTED</HowItWorksBtn>
    </TextContainer>
  </Container>
}