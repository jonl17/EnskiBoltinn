import styled, { css } from "styled-components"
import { TRANSITION_SPEED } from "../../../constants"

export const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 250px auto 250px;
  grid-template-rows: 100px auto;
  grid-template-areas:
    "... header ..."
    "news mainvideo chat";
  width: 100%;
  color: white;
  background: linear-gradient(180deg, #00aff2 0%, #94e2ff 48.96%, #00abf0 100%);
  transition: ${TRANSITION_SPEED}s;
  ${props =>
    props.mode === `stream` &&
    css`
      opacity: 0;
      z-index: -2;
    `}
  ${props =>
    props.mode === `ad` &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`
