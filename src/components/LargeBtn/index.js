import React from "react"
import { BTN, BTNblue, Text } from "./Styled"

import { connect } from "react-redux"
import { setMode } from "../../state/actions"

const LargeBtn = ({ mode, dispatch }) => {
  console.log(mode)
  return mode === `ad` ? (
    <BTNblue onClick={() => dispatch(setMode())}>
      <Text mode={mode}>Sækja prufukóða</Text>
    </BTNblue>
  ) : (
    <BTN onClick={() => dispatch(setMode())}>
      <Text mode={mode}>INSTANT REPLAY</Text>
    </BTN>
  )
}

export default connect()(LargeBtn)
