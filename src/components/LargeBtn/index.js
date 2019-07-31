import React from "react"
import { BTN, Text } from "./Styled"

import { connect } from "react-redux"
import { setMode } from "../../state/actions"

const LargeBtn = ({ text, dispatch }) => {
  return (
    <BTN onClick={() => dispatch(setMode())}>
      <Text>{text}</Text>
    </BTN>
  )
}

export default connect()(LargeBtn)
