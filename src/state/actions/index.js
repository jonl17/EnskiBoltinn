// actions
export const TRIGGER_VIDEO = "TRIGGER_VIDEO"
export const triggerVideo = () => ({
  type: TRIGGER_VIDEO,
})
export const HIDE_EX = "HIDE_EX"
export const hideEx = () => ({
  type: HIDE_EX,
})
export const INCREMENT_VIEWERS = "INCREMENT_VIEWERS"
export const incrementViewers = () => ({
  type: INCREMENT_VIEWERS,
})
export const SET_DEVICE = "SET_DEVICE"
export const setDevice = size => ({
  type: SET_DEVICE,
  size,
})
