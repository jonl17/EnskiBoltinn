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
  position: absolute;
  bottom: 0;
  height: 90px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 15px;
  border: none;
  z-index: 100;
  opacity: 1;
  &&:hover {
    cursor: pointer;
    /* animation: ${glow} 0.3s ease infinite alternate; */
    &::before {
      opacity: 1;
    }
  }

  background-image: linear-gradient(
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

  &::before {
    border-radius: inherit;
    background-image: linear-gradient(
    0deg,
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
    content: '';    
    display: block;
    height: 90px;
    position: absolute;
    bottom: 0; left: 0;
    opacity: 0;
    width: 100%;
    max-width: 700px;
    z-index: -100;
    transition: opacity 0.45s;
  }
`
export const Text = styled.p`
  font-size: 45px;
  margin: 0;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
`
