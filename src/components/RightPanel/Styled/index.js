import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 250px;
  position: absolute;
  right: 0;
  top: 100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
`
