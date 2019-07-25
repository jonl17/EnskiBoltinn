import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
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
  margin: auto;
  font-size: 13px;
`

export const OutputBox = styled.div`
  color: black;
  box-sizing: border-box;
  overflow-y: scroll;
`
export const InputBox = styled.div`
  color: black;
  box-sizing: border-box;
  position: relative;
  display: flex;
  margin: 0;
`
export const Type = styled.input`
  width: 100%;
`
export const Send = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 0;
  box-sizing: border-box;
`
