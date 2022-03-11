import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px;
  font-size: 13px;
  figure {
    img {
      width: 80px;
      height: 110px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 65%;
    p {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 3px;
    }
    span {
      font-size: 16px;
      font-weight: 200;
      margin-bottom: 3px;
    }
  }
  button {
    border: none;
    height: 24px;
    margin-bottom: 7px;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    div {
      flex-direction: row;
      justify-content: space-between;

      p + span {
        margin-left: 15px;
      }
      span + span {
        margin-left: 15px;
      }
    }
  }
`;
