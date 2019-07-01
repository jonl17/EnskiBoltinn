import { TRIGGER_VIDEO, HIDE_EX, INCREMENT_VIEWERS } from "../actions"

const initialState = {
  play: false,
  exHidden: false,
  viewers: 34,
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
    default:
      return state
  }
}
