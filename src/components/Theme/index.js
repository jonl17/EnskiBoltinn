import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../../state/actions"

import { Container } from "./Styled"

class Theme extends React.Component {
  componentDidMount() {
    this.props.dispatch(setDevice(window.innerWidth))
  }
  render() {
    const { children } = this.props
    return (
      <>
        <Container>{children}</Container>
      </>
    )
  }
}

export default connect()(Theme)
