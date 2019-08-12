import {
  TRIGGER_VIDEO,
  HIDE_EX,
  INCREMENT_VIEWERS,
  SET_DEVICE,
  COUNTDOWN,
  SET_MODE,
} from "../actions"

const initialState = {
  play: false,
  exHidden: false,
  viewers: 34,
  device: `sBrowser`,
  /* countdown */
  gameStart: new Date("24 Aug, 2019 14:00:00").getTime(),
  currentTime: new Date().getTime(),
  countdownStatus: undefined,
  mode: `stream` /* stream OR ad */,
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
    case SET_MODE:
      var tempMode = ""
      var tempExHidden = state.exHidden
      if (state.mode === `stream`) {
        tempMode = `ad`
        tempExHidden = true
      }
      if (state.mode === `ad`) {
        tempMode = `stream`
      }
      return { ...state, mode: tempMode, exHidden: tempExHidden }
    default:
      return state
  }
}
