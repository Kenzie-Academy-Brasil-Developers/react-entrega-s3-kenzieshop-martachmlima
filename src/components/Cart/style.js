import styled from "styled-components";

export const MainPage = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

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
  justify-content: space-around;
  background-color: lightgray;
  height: 230px;
  margin-top: 50px;
  margin-left: 40px;
  width: 22%;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    width: 60%;
    height: 200px;
  }

  p {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  > section {
    position: static;
    display: flex;
    width: 80%;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    > span {
      margin-bottom: 10px;
    }
  }

  button {
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: blue;
    padding: 8px;
    color: whitesmoke;
    font-weight: 700;
    cursor: pointer;
    @media (min-width: 800px) {
      font-size: 18px;
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 65%;
  background-color: lightgray;
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`;
