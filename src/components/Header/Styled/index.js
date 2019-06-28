import styled from "styled-components"

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
`
export const Item = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  margin: auto;
  &&:hover {
    cursor: pointer;
    color: yellow;
    background: -webkit-linear-gradient(yellow, lightgreen, green, darkgray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
