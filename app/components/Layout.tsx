import Head from 'next/head'
import * as React from 'react'
import styled from 'themes'

import { Header } from 'components'
import FooterContainer from 'containers/FooterContainer'

interface IProps {
  title?: string
}

const StyledContent = styled.div`
  width: 80%;
  height: calc(100vh - 20px);
  margin: auto;
  margin-top: 10px;
  border-radius: 5%;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.primary};
  position: relative;
  padding-bottom: 150px;
`

const Layout: React.FunctionComponent<IProps> = ({
  children,
  title = 'No title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StyledContent>
      <Header title={title} />
      {children}
      <FooterContainer />
    </StyledContent>
  </>
)

export default Layout
