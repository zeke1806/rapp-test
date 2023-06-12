import styled from "styled-components"
import Image, { ImageProps } from "next/image"

const StyledImage = styled.div`
  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

export const MyImageContainer = styled.div`
  > div {
    position: unset !important;
  }
`

export const MyImage = (props: ImageProps) => {
  return <MyImageContainer>
  <StyledImage>
    <Image {...props} alt={props.alt} className="image" fill />
  </StyledImage>
</MyImageContainer>
}