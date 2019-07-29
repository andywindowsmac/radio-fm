import { compose } from 'recompact'

import withData from './withData'
import withTheming from './withTheming'

const page = compose(
  withTheming,
  withData,
)

export default page
