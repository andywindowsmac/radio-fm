import { hoistStatics } from 'recompact'

import ThemeWrapper from 'themes/ThemeWrapper'

const withThemeWrapper = hoistStatics(ComposedComponent => {
  const WithThemeWrapper = props => (
    <ThemeWrapper>
      <ComposedComponent {...props} />
    </ThemeWrapper>
  )

  return WithThemeWrapper
})

export default withThemeWrapper
