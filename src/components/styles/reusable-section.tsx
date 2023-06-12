import styled from "styled-components"
import { LighterText } from "../styles/ligher-text"
import { BolderText } from "../styles/bolder-text"
import { Button } from "../button"
import { MyImage, MyImageContainer } from "./my-image"

interface Props {
  imgSrc: string;
  imgAlt: string;
  text1: string;
  text2: string;
  text3: string;
  textBtn: string;
  reverse?: boolean;
}

interface ContainerProps {
  reverse?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => props.theme.spacer}px;
  padding-right: ${(props) => props.theme.spacer}px;
  text-align: left;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    padding-left: 0;
    padding-right: 0;
  }
`

const ImageContainer = styled(MyImageContainer)`
  height: 223px;
  width: 100%;
  margin-bottom: ${props => props.theme.spacer * 2}px;
  overflow: hidden;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    height: 439px;
    width: 50%;
    margin-bottom: 0;
  }
`

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    width: 50%;
    padding-top: ${props => props.theme.spacer * 2}px;;
    padding-left: ${props => props.theme.spacer * 11}px;
    padding-right: ${props => props.theme.spacer * 11}px;
  }
`

const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const Content = styled(LighterText)`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const ReusableSectionButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacer * 2}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    align-self: center;
  }
`

export const ReusableSection = (props: Props) => {
  return <Container reverse={props.reverse}>
    <ImageContainer>
      <MyImage src={props.imgSrc} alt={props.imgAlt} />
    </ImageContainer>
    <ContentContainer>
      <Title>{props.text1}</Title>
      <Content>
        <BolderText as="span">{props.text2}</BolderText>
        {props.text3}
      </Content>
      <ReusableSectionButton>{props.textBtn}</ReusableSectionButton>
    </ContentContainer>
  </Container>
}