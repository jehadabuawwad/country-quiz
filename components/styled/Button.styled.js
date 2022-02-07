import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ next }) => (next ? "25px" : "0px")};
  margin-right: ${({ next }) => (next ? "35px" : "0px")};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.nextButtonBackgroundColor};
  box-shadow: 0px 2px 4px 0px #fca82f66;
  border-radius: 10px;
  border: 0px;
  line-height: 27px;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 25px;
  } ;
`;
