import styled from "styled-components";

export const Button = styled.button`
  width: 116px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.nextButtonBackgroundColor};
  box-shadow: 0px 2px 4px 0px #fca82f66;
  border-radius: 10px;
  border: 0px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 100px;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
