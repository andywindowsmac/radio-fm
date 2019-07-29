import PropTypes from 'prop-types'
import * as React from 'react'
import styledNormalize from 'styled-normalize'

import {
  ColorMap,
  createGlobalStyle,
  FontMap,
  ImageMap,
  ThemeProvider,
} from '.'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  ${styledNormalize}
`

const theme = {
  colors: { ...ColorMap },
  fonts: { ...FontMap },
  images: { ...ImageMap },
}

class ThemeWrapper extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {children}
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default ThemeWrapper

export { GlobalStyle }
