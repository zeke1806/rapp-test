import styled from "styled-components"

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: black;
  font-weight: bold;
  font-size: 16px;
  padding-top: ${props => props.theme.spacer}px;
  padding-bottom: ${props => props.theme.spacer}px;
  border-radius: ${props => props.theme.radius}px;
  border-width: 0px;

  @media only screen and (min-width: ${props => props.theme.screen.desktop}px) {
    font-size: 24px;
  }
`