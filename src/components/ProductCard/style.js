import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 360px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  > img {
    width: 150px;
    height: 223px;
  }

  > p {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: 700;
  }

  > span {
    margin-top: 5px;
  }

  > button {
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
