import * as styledComponents from 'styled-components'

import ColorMap from './Colors'
import FontMap from './Fonts'
import ImageMap from './Images'
import { IThemeColorMap, IThemingInterface } from './types'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemingInterface
>

export { ColorMap, ImageMap, FontMap }
export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
