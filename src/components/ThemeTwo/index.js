import React from "react"
import { Container } from "./Styled"

const ThemeTwo = ({ children, mode }) => {
  return <Container mode={mode}>{children}</Container>
}

export default ThemeTwo
