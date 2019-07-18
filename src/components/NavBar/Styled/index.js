import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`
export const Button = styled.button`
  width: 100%;
  flex-grow: 1;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #fbfffb 0.27%,
    #8eff90 7.23%,
    #63ff65 10.32%,
    #56ff58 10.72%,
    #3bff3e 11.72%,
    #25ff28 12.87%,
    #14ff17 14.21%,
    #09ff0c 15.87%,
    #02ff05 18.2%,
    #00ff03 24.66%,
    #009105 85.73%
  );
  border-radius: 5px;

  /* text */
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  &&:hover {
    cursor: pointer;
  }
`
