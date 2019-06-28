import styled, { css } from "styled-components"

export const BTN = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.color === "green" &&
    css`
      background: #00c258;
      border: #00abf0 0.75px solid;
    `}
  ${props =>
    props.color === "blue" &&
    css`
      background: #00abf0;
      border: #00c258 0.75px solid;
    `}
`
export const Paragraph = styled.p`
  color: white;
  text-transform: uppercase;
`
