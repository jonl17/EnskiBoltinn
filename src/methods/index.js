export const calculateDays = countdown => {
  return Math.floor(countdown / (1000 * 60 * 60 * 24))
}
export const calculateHours = countdown => {
  return Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
}
export const calculateMinutes = countdown => {
  return Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
}

export const calculateSeconds = countdown => {
  return Math.floor((countdown % (1000 * 60)) / 1000)
}
