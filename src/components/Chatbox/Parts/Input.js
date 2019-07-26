import React from "react"
import { InputBox, Send, Type, BallBTN } from "../Styled"

import Ball from "../../../../static/send.png"

const Input = ({ text }) => {
  return (
    <InputBox>
      <Type placeholder={text}></Type>
      <Send>
        <BallBTN src={Ball}></BallBTN>
      </Send>
    </InputBox>
  )
}

export default Input
