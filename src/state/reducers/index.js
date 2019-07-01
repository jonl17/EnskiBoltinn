import { TRIGGER_VIDEO, HIDE_EX } from "../actions"

const initialState = {
  play: false,
  exHidden: false,
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
    default:
      return state
  }
}
