import * as React from 'react'

import Layout from 'components/Layout'
import RadioStationsContainer from 'containers/RadioStationsContainer'
import page from 'hocs/page'

const IndexPage: React.FunctionComponent<{}> = () => {
  return (
    <Layout title="Stations">
      <RadioStationsContainer />
    </Layout>
  )
}

export default page(IndexPage)
