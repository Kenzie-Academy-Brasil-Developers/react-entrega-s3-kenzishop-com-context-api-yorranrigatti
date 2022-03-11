import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 30px;

  h2 {
    font-size: 16px;
    margin: 15px 10px;
    font-weight: 500;
  }
  div {
    padding: 5px 10px;
    display: flex;

    button + button {
      margin-left: 10px;
    }
    svg {
      margin-right: 3px;
    }
  }
`;
