import { TRIGGER_VIDEO } from "../actions"

const initialState = {
  play: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_VIDEO:
      if (state.play) {
        return { ...state, play: false }
      }
      return { ...state, play: true }
    default:
      return state
  }
}
