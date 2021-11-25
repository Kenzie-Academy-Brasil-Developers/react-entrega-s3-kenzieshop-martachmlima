import styled from "styled-components";

export const Header = styled.header`
  height: fit-content;
  background-color: lightblue;
  color: black;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 20px 20px 20px 10px;
  }

  svg {
    height: 30px;
    width: 30px;
  }

  p {
    position: absolute;
    background-color: darkblue;
    color: white;
    padding: 3px 7px;
    border-radius: 100%;
    right: 32%;
    @media (min-width: 700px) {
      right: 17%;
    }
    @media (min-width: 1000px) {
      right: 10%;
    }
    @media (min-width: 1400px) {
      right: 8%;
    }
  }

  span {
    height: fit-content;
    width: fit-content;
    margin: 20px 20px 20px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
