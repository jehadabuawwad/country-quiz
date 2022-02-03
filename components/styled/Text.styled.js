import styled from "styled-components";

export const StyledText = styled.p`
  width: ${({ title }) => (title ? "273px" : "400px")} 273px;
  height: ${({ title }) => (title ? "50px" : "36px")};
  margin-top: ${({ title }) => (title ? "-125px" : "-36px")};
  color: ${({ title }) => (title ? "#f2f2f2" : "#2f527b")};
  line-height: ${({ title }) => (title ? "54px" : "36px")};
  font-size: ${({ title }) => (title ? "36px" : "20px")};
  font-style: normal;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
