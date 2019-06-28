import styled, { keyframes } from "styled-components"

const glow = keyframes`
   from {
       transform: scale(1)
   }
   to {
       transform: scale(1.004)
   }
`

export const BTN = styled.button`
  height: 90px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  &&:hover {
    cursor: pointer;
  }
  border-radius: 15px;
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
    #02ff05 18.19%,
    #00ff03 24.65%,
    #009105 85.69%
  );
  background-size: 400%;
  border: none;
  &&:hover {
    animation: ${glow} 0.3s ease infinite alternate;
  }
`
export const Text = styled.p`
  font-size: 45px;
  margin: 0;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
`
