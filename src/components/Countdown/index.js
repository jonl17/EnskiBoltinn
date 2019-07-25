import React from "react"

import { connect } from "react-redux"
import { countdown } from "../../state/actions"
import { calculateDays, calculateHours, calculateMinutes } from "../../methods"

import { Container, Title, Number, Date, TimeBlock } from "./Styled"

class Countdown extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.dispatch(countdown()), 1000)
  }
  update() {}
  render() {
    const { countdownStatus } = this.props
    return (
      <Container>
        <Title>Countdown</Title>
        <TimeBlock>
          <Number>{calculateDays(countdownStatus)}</Number>
          <Date>D</Date>
        </TimeBlock>
        <TimeBlock>
          <Number>{calculateHours(countdownStatus)}</Number>
          <Date>HRS</Date>
        </TimeBlock>
        <TimeBlock>
          <Number>{calculateMinutes(countdownStatus)}</Number>
          <Date>MIN</Date>
        </TimeBlock>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  gameStart: state.reducer.gameStart,
  currentTime: state.reducer.currentTime,
  countdownStatus: state.reducer.countdownStatus,
})

export default connect(mapStateToProps)(Countdown)
