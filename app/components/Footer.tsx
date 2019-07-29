import * as React from 'react'

import styled from 'themes'

const FOOTER_HEIGHT = 150
const TITLE = 'Currently Playing'

interface IProps {
  currentStation?: string
}

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${FOOTER_HEIGHT}px;
  background-color: ${({ theme: { colors } }) => colors.dark};
  border-top-color: ${({ theme: { colors } }) => colors.divider};
  border-top-width: 0.5px;
  border-top-style: solid;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${({ theme: { colors } }) => colors.secondary};
`

const StyledStation = styled.p`
  font-size: 40px;
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textGray};
`

const Footer: React.FunctionComponent<IProps> = ({ currentStation }) => (
  <StyledFooter>
    {currentStation && (
      <>
        <StyledTitle>{TITLE.toUpperCase()}</StyledTitle>
        <StyledStation>{currentStation}</StyledStation>
      </>
    )}
  </StyledFooter>
)

export default Footer
