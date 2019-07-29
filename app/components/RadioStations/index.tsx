import * as React from 'react'

import styled from 'themes'

interface IProps {
  currentStation: string
  stations: any[]
  onStationChange: (stations: string) => any
}

interface IState {}

const StationsList = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: calc(100% - 100px);
`

const StationListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StationListItemWrapper = styled.div`
  margin: 0 30px;
`

const StationText = styled.p`
  font-size: 40px;
  color: ${({ theme: { colors } }) => colors.textGray};
`

const StationName = styled(StationText)``

const StationChannel = styled(StationText)`
  font-weight: 900;
`

const Divider = styled.div`
  background-color: ${({ theme: { colors } }) => colors.divider};
  width: 100%;
  height: 1.5px;
`

const Station = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StationButton = styled.button`
  background-color: transparent;
  border-style: solid;
  color: ${({ theme: { colors } }) => colors.textGray};
  border-radius: 50%;
  border-color: ${({ theme: { colors } }) => colors.textGray};
  width: 50px;
  height: 50px;
  border-width: 3px;
  font-size: 30px;
`

const StationLabel = styled.div`
  width: 200px;
  height: 200px;
  background-color: wheat;
  border-radius: 50%;
  border-width: 2px;
  border-color: white;
  border-style: solid;
`

class RadioStations extends React.PureComponent<IProps, IState> {
  renderStation = (station: any, index: number) => {
    const { id, name, channel } = station
    const isLast = this.props.stations.length - 1 === index
    const isCurrentStation =
      `${name}`.localeCompare(`${this.props.currentStation}`) === 0

    const handleStationListItemClick = () => {
      this.props.onStationChange(name)
    }

    return (
      <StationListItemWrapper onClick={handleStationListItemClick} key={id}>
        <StationListItem>
          <StationName>{name}</StationName>
          <StationChannel>{channel}</StationChannel>
        </StationListItem>
        {!isLast && <Divider />}
        {isCurrentStation && (
          <Station>
            <StationButton>+</StationButton>
            <StationLabel />
            <StationButton>-</StationButton>
          </Station>
        )}
      </StationListItemWrapper>
    )
  }
  render() {
    return (
      <StationsList>{this.props.stations.map(this.renderStation)}</StationsList>
    )
  }
}

export default RadioStations
