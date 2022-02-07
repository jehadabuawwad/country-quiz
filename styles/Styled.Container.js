import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  & > a {
    cursor: pointer;
    border: 2px solid #1d355d;
    box-sizing: border-box;
    border-radius: 12px;
    width: 209px;
    height: 62px;
    left: 615px;
    padding-top: 15px;
    text-align: center;
  }
`;

export default Container;
