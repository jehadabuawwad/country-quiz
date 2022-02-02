import styled from "styled-components";

export const Option = styled.div`
  width: 400px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.unSelectedButtonBackground};
  border: 2px solid rgba(96, 102, 208, 0.7);
  margin-top: 25px;
  padding-top: 15px;
  padding-left: 18px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.defaultButtonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.selectedButtonBackground};
    color: ${({ theme }) => theme.colors.hoveredButtonText};
  }
`;
