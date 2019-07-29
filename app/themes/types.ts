export interface IThemeImageMap {
  backArrow: string
  minus: string
  plus: string
  switch: string
}

export interface IThemeColorMap {
  primary: string
  secondary: string
  white: string
  textGray: string
  dark: string
  divider: string
}

export interface IThemeFontMap {}

export interface IThemingInterface {
  colors: IThemeColorMap
  fonts: IThemeFontMap
  images: IThemeImageMap
}
