import React from "react"
import styled from "styled-components"

import { connect } from "react-redux"
import { incrementViewers } from "../../state/actions"

const Container = styled.div`
  display: flex;
  margin: auto;
  height: 50px;
`
const Counter = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 15px;
`

const Dot = styled.div`
  background-color: greenyellow;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin-top: 6px;
  margin-right: 10px;
`

const ViewCount = ({ viewers, dispatch }) => {
  var eidursmari = setInterval(function() {
    dispatch(incrementViewers())
  }, 5000)
  if (viewers > 1000) {
    clearInterval(eidursmari)
  }
  return (
    <Container>
      <Dot></Dot>
      <Counter>{viewers} WATCHING</Counter>
    </Container>
  )
}

const mapStateToProps = state => ({
  viewers: state.reducer.viewers,
})

export default connect(mapStateToProps)(ViewCount)
