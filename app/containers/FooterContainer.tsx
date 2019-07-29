import * as React from 'react'
import { connect } from 'react-redux'

import { Footer } from 'components'

interface IProps {
  currentStation?: string
}

const FooterContainer: React.FunctionComponent<IProps> = ({
  currentStation,
}) => <Footer currentStation={currentStation} />

const mapStateToProps = state => ({
  currentStation: state.stations.currentStation,
})

const EnhancedFooterContainer = connect(mapStateToProps)(FooterContainer)

export default EnhancedFooterContainer
