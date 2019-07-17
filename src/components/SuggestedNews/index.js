import React from "react"
import { connect } from "react-redux"

import { Container, Title, NewsContainer } from "./Styled"
import News from "../News"

const SuggestedNews = ({ positioning, device }) => {
  console.log(device)
  return (
    <>
      <Container positioning={positioning}>
        <Title>Suggested News</Title>
        <NewsContainer>
          <News></News>
          <News></News>
          <News></News>
          <News></News>
        </NewsContainer>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(SuggestedNews)
