import {
  TRIGGER_VIDEO,
  HIDE_EX,
  INCREMENT_VIEWERS,
  SET_DEVICE,
  COUNTDOWN,
} from "../actions"

const initialState = {
  play: false,
  exHidden: false,
  viewers: 34,
  device: `sBrowser`,
  /* countdown */
  gameStart: new Date("24 Aug, 2019 14:00:00").getTime(),
  currentTime: new Date().getTime(),
  countdownStatus:
    new Date("24 Aug, 2019 14:00:00").getTime() - new Date().getTime(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_VIDEO:
      if (state.play) {
        return { ...state, play: false }
      }
      return { ...state, play: true }
    case HIDE_EX:
      return { ...state, exHidden: true } // a one time thing
    case INCREMENT_VIEWERS:
      return { ...state, viewers: state.viewers + 1 }
    case SET_DEVICE:
      var tmpDevice = ``
      if (action.size > 1350) {
        tmpDevice = `lBrowser`
      }
      if (action.size > 950 && action.size < 1350) {
        tmpDevice = `sBrowser`
      }
      if (action.size < 950 && action.size > 600) {
        tmpDevice = `tablet`
      }
      if (action.size < 600) {
        tmpDevice = `lMobile`
      }
      if (action.size < 450) {
        tmpDevice = `sMobile`
      }
      return { ...state, device: tmpDevice }
    case COUNTDOWN:
      return { ...state, countdownStatus: state.gameStart - action.now }
    default:
      return state
  }
}
