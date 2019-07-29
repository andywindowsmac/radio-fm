const initialState = {
  currentStation: null,
  stations: [
    { id: 1, name: 'Putin FM', channel: '66.6' },
    { id: 2, name: 'Dribble FM', channel: '101.2' },
    { id: 3, name: 'Doge FM', channel: '99.4' },
    { id: 4, name: 'Ballads FM', channel: '87.1' },
    { id: 5, name: 'Maximum FM', channel: '142.2' },
  ],
}
const ActionTypes = {
  CHANGE_STATION: 'CHANGE_STATION',
  RESET: 'RESET_STATIONS',
}

export const reset = dispatch =>
  dispatch({
    type: ActionTypes.RESET,
  })

export const changeStation = (dispatch, station) =>
  dispatch({
    type: ActionTypes.CHANGE_STATION,
    payload: station,
  })

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_STATION:
      return { ...state, currentStation: action.payload }
    case ActionTypes.RESET:
      return initialState
    default:
      return state
  }
}
