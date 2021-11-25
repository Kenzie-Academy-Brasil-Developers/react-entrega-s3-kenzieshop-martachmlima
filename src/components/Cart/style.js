import styled from "styled-components";

export const MainPage = styled.main`
  width: 100vw;
  display: flex;

  section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    position: absolute;
    top: 10%;
    padding-left: 10px;
  }

  p {
    margin-left: 10px;
  }

  svg {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  min-height: 100px;
  margin-top: 50px;
  margin-left: 40px;
  width: 30%;

  button {
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: blue;
    padding: 8px;
    color: whitesmoke;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const ProductsContainer = styled.div`
  width: 60%;
  background-color: lightgray;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
