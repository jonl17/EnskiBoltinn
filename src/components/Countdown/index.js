import React from "react"

import { Container, Title, Number, Date, TimeBlock } from "./Styled"

class Countdown extends React.Component {
  render() {
    return (
      <Container>
        <Title>Countdown</Title>
        <TimeBlock>
          <Number>7</Number>
          <Date>D</Date>
        </TimeBlock>
        <TimeBlock>
          <Number>14</Number>
          <Date>HRS</Date>
        </TimeBlock>
        <TimeBlock>
          <Number>3</Number>
          <Date>MIN</Date>
        </TimeBlock>
      </Container>
    )
  }
}

export default Countdown
