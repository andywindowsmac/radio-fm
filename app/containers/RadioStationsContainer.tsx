import * as React from 'react'
import { connect } from 'react-redux'

import { RadioStations } from 'components'
import { changeStation } from 'ducks/stations'

interface IProps {
  changeStation?: (currentStation: string) => any
  currentStation?: string
  stations: any[]
}

interface IState {}

class RadioStationsContainer extends React.PureComponent<IProps, IState> {
  handleStationChange = (currentStation: string) => {
    if (currentStation === this.props.currentStation) {
      this.props.changeStation(null)
      return
    }
    this.props.changeStation(currentStation)
  }

  render() {
    return (
      <RadioStations
        currentStation={this.props.currentStation}
        stations={this.props.stations}
        onStationChange={this.handleStationChange}
      />
    )
  }
}

const mapStateToProps = ({ stations: { currentStation, stations } }) => ({
  currentStation,
  stations,
})

const mapDispatchToProps = dispatch => ({
  changeStation: (currentStation: string) =>
    changeStation(dispatch, currentStation),
})

const EnhancedRadioStationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RadioStationsContainer)

export default EnhancedRadioStationsContainer
