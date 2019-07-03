import styled from "styled-components"
import pogba from "../../../../static/pogba.png"

export const Box = styled.div`
  background-color: white;
  height: 150px;
  width: 150px;
  margin: auto;
  background-image: url(${pogba});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 150px 100px;
  position: relative;
  border-radius: 15px;
`
export const HeadlineContainer = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
`
export const Headline = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800i&display=swap");
  font-family: "Open Sans", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: black;
  text-align: center;
  margin: 0;
`
