import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  max-height: 300px;
  width: 75%;
  background: linear-gradient(
    135deg,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  position: relative;
  display: grid;
  grid-template-rows: auto 40px;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
`

/* output */
export const OutputBox = styled.div`
  color: black;
  box-sizing: border-box;
  overflow-y: scroll;
  font-family: Arial, Helvetica, sans-serif;
`
export const Username = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`
export const Message = styled.p`
  color: gray;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`

/* input */
export const InputBox = styled.div`
  color: black;
  box-sizing: border-box;
  position: relative;
  display: flex;
  margin: 0;
`
export const Type = styled.input`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
`
export const Send = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 0;
  box-sizing: border-box;
`
export const BallBTN = styled.img`
  width: 100%;
  height: 25px;
  box-sizing: border-box;
  margin-top: 5px;
`
