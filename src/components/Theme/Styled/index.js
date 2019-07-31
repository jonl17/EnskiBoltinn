import styled from "styled-components"

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
`
