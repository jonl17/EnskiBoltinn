import React from "react"
import Ex from "../../../static/ex.png"
import styled from "styled-components"

import { connect } from "react-redux"
import { hideEx } from "../../state/actions"

const Image = styled.img`
  height: 15px;
  width: 15px;
  margin: auto;
  &&:hover {
    cursor: pointer;
  }
`
const Container = styled.div`
  position: absolute;
  display: ${props => (props.hide ? "none" : "grid")};
  height: 100%;
  width: 75%;
  left: 0;
  top: 0;
  background-color: rgb(16, 16, 16, 0.3);
  z-index: 4;
`

const ExSpam = ({ exHidden, dispatch }) => {
  return (
    <Container hide={exHidden}>
      <Image onClick={() => dispatch(hideEx())} src={Ex}></Image>
    </Container>
  )
}

const mapStateToProps = state => ({
  exHidden: state.reducer.exHidden,
})

export default connect(mapStateToProps)(ExSpam)
