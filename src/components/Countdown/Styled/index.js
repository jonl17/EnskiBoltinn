import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "title title title"
    "days hrs min";
  margin: auto;
`
export const Title = styled.p`
  margin: 0;
  grid-area: title;
  width: 100%;
  font-size: 20px;
  text-align: center;
  color: #02ff05;
  text-transform: uppercase;
`
export const Number = styled.p`
  margin: 0;
  font-size: 20px;
  color: #02ff05;
`
export const Date = styled.p`
  margin: 0;
  font-size: 12px;
  margin-top: 8px;
`
export const TimeBlock = styled.div`
  display: flex;
`
