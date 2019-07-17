import styled, { css } from "styled-components"

/* props determine left/right positioning */
export const Container = styled.div`
  position: absolute;
  top: 100px;
  ${props =>
    props.positioning === "right" &&
    css`
      right: 0;
    `}
  ${props =>
    props.positioning === "left" &&
    css`
      left: 0;
    `}

  width: 250px;
  height: 100%;
`
export const NewsContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 150px);
  margin-bottom: 50px;
`
export const Title = styled.p`
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`
