import * as React from 'react'

import styled from 'themes'

interface IProps {
  title?: string
}

const HEADER_HEIGHT = 100

const HeaderButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  outline: none;
`

const BackButton = styled(HeaderButton)`
  background-image: url(${({ theme: { images } }) => images.backArrow});
`

const Title = styled.p`
  color: white;
  font-size: 30px;
`

const TurnOffButton = styled(HeaderButton)`
  background-image: url(${({ theme: { images } }) => images.switch});
`

const StyledHeader = styled.div`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header: React.FunctionComponent<IProps> = ({ title }) => (
  <StyledHeader>
    <BackButton />
    <Title>{`${title}`.toUpperCase()}</Title>
    <TurnOffButton />
  </StyledHeader>
)

export default Header
