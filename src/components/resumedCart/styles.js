import styled from "styled-components";

export const Container = styled.aside`
  border-top: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 25px;
  min-width: 300px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  @media (min-width: 768px) {
    border-left: 1px solid #000;
    margin: 0;
    border-top: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 10px 0;
    margin-bottom: 10px;
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
