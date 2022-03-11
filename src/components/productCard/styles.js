import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  img {
    width: 200px;
    height: 200px;
  }
  p {
    margin: 0 0 7px 0;
  }
  span {
    margin: 0 0 7px 0;
  }
  button {
    width: 80%;
    padding: 10px 20px;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s;
    font-size: 16px;
  }
  button:hover {
    transform: scale(1.03);
  }
  button:active {
    transform: scale(0.97);
  }
`;
