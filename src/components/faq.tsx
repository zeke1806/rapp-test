import styled from "styled-components"
import { Button } from "./button";

interface FaqItemProps {
    title: string;
}

const FaqData: FaqItemProps[] = [
  {
    title: 'What is baby sleep  training?'
  },
  {
    title: 'Does the Lumi Smart Sleep Coach app work?'
  },
  {
    title: "I don't have time to track manually, is there an alternative?"
  },
  {
    title: 'Is sleep training safe for my baby?'
  },
  {
    title: 'Are there multiple sleep training methods to choose from?'
  },
  {
    title: 'How long does it take for my baby’s sleep to improve?'
  },
  {
    title: 'When can I start training my baby to sleep with the Lumi Smart Sleep Coach?'
  },
  {
    title: 'Can I grant app access to other people who care for my baby?​'
  },
  {
    title: 'Is it too late to sleep train my baby?'
  },
  {
    title: 'How long will I have access?'
  },
  {
    title: 'Can I cancel my plan?'
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => props.theme.spacer}px;
  padding-right: ${(props) => props.theme.spacer}px;
  margin-bottom: ${(props) => props.theme.spacer * 5}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    padding-top: ${props => props.theme.spacer * 3}px;
  }
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacer * 2}px;
`

const FaqItemListContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacer * 2}px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    padding-left: ${props => props.theme.spacer * 40}px;
    padding-right: ${props => props.theme.spacer * 40}px;
  }
`

const FaqItemContainer = styled.div`
  border-bottom:  1px solid ${props => props.theme.colors.three};
`

const FaqItemTitle = styled.p`
  color: ${props => props.theme.colors.two};
  padding-bottom: ${props => props.theme.spacer}px;
  padding-top: ${props => props.theme.spacer}px;
  margin-bottom: ${props => props.theme.spacer}px;
  margin-top: ${props => props.theme.spacer * 2}px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FaqArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${props => props.theme.colors.three};
  transition: transform 0.3s;
  transform: rotate(0deg);
`

const FaqButton = styled(Button)`
  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    align-self: center;
  }
`

const FaqItem = (props: FaqItemProps) => {
  return <FaqItemContainer>
    <FaqItemTitle>
      {props.title}
      <FaqArrow />
    </FaqItemTitle>
  </FaqItemContainer>
}

export const Faq = () => {
  return <Container>
    <Title>We&apos;re here to answer your questions</Title>
    <FaqItemListContainer>
      {
        FaqData.map((elt, i) => (
          <FaqItemContainer key={i}>
            <FaqItem title={elt.title} />
          </FaqItemContainer>
        ))
      }
    </FaqItemListContainer>
    <FaqButton>GET STARTED</FaqButton>
  </Container>
}