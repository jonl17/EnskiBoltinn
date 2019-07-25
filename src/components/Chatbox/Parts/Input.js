import React from "react"
import { InputBox, Send, Type } from "../Styled"

const Input = ({ text }) => {
  return (
    <InputBox>
      <Type placeholder={text}></Type>
      <Send>+</Send>
    </InputBox>
  )
}

export default Input
