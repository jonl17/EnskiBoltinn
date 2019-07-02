import React from "react"
import { Container, Title, NewsContainer } from "./Styled"
import News from "../News"

const SuggestedNews = ({ positioning }) => {
  return (
    <>
      <Container positioning={positioning}>
        <Title>Suggested News</Title>
        <NewsContainer>
          <News></News>
          <News></News>
          <News></News>
        </NewsContainer>
      </Container>
    </>
  )
}

export default SuggestedNews
