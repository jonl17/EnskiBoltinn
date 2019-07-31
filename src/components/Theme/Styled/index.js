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
  background: linear-gradient(
    180deg,
    #000000 0%,
    #000000 23.44%,
    #0086b9 40.51%,
    #00aff2 50%,
    #008fc7 59.63%,
    #000000 84.9%,
    #000000 100%
  );
  transition: ${TRANSITION_SPEED}s;
  ${props =>
    props.mode === `ad` &&
    css`
      opacity: 0;
      z-index: -2;
    `}
  ${props =>
    props.mode === `stream` &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`
