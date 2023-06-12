import styled from "styled-components"
import Image from "next/image"
import { LighterText } from "../styles/ligher-text"
import { BolderText } from "../styles/bolder-text"
import { Button } from "../button"
import { MyImage, MyImageContainer } from "./my-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => props.theme.spacer}px;
  padding-right: ${(props) => props.theme.spacer}px;
  text-align: left;
`

const ImageContainer = styled(MyImageContainer)`
  height: 223px;
  width: 100%;
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const Content = styled(LighterText)`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const ButtonWithSpace = styled(Button)`
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

interface Props {
  imgSrc: string;
  imgAlt: string;
  text1: string;
  text2: string;
  text3: string;
  textBtn: string;
}

export const ReusableSection = (props: Props) => {
  return <Container>
    <ImageContainer>
      <MyImage src={props.imgSrc} alt={props.imgAlt} />
    </ImageContainer>
    <Title>{props.text1}</Title>
    <Content>
      <BolderText as="span">{props.text2}</BolderText>
      {props.text3}
    </Content>
    <ButtonWithSpace>{props.textBtn}</ButtonWithSpace>
  </Container>
}