import styled from "styled-components";

export const StyledText = styled.p`
  width: ${({ title }) => (title ? "273px" : "400px")};
  height: ${({ title }) => (title ? "50px" : "36px")};
  margin-top: ${({ tp }) => tp};
  color: ${({ color }) => color};
  line-height: ${({ title }) => (title ? "54px" : "36px")};
  font-size: ${({ title }) => (title ? "36px" : "20px")};
  font-style: normal;
  font-weight: ${({ result }) => (result ? "100" : "bold")};
  text-align: center;
  text-transform: uppercase;
  opacity: 1;

  & > span {
    color: #87cc9b;
    font-size: 35px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ title }) => (title ? "28px" : "20px")};
    padding-left:10px;
    padding-right: 10px;
  } ;
`;
