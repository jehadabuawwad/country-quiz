import styled from "styled-components";

export const Card = styled.div`
  width: 464px;
  height: 515px;
  border-radius: 24px;
  background-color: #fff;
  & > div > #question-title {
    width: 273px;
    margin-top: -50px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    text-transform: uppercase;
    color: #f2f2f2;
  }
  & > div > #question-world-image {
  }
  & > div > #question-text {
    text-align: center;
    width: 400px;
    height: 36px;
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
    color: #2f527b;
    margin-top: -50px;
  }
`;
