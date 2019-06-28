import React from "react"
import { GlobalStyles } from "../GlobalStyle"
import { Container } from "./Styled"

const Theme = ({ children }) => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Container>{children}</Container>
    </>
  )
}

export default Theme
