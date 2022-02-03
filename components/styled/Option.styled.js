import styled from "styled-components";

export const StyledOption = styled.div`
  width: 400px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ bg, selected }) => selected && bg};
  border: 2px solid rgba(96, 102, 208, 0.7);
  margin-top: 15px;
  padding-top: 15px;
  padding-left: 18px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ theme,selected }) => selected && theme.colors.hoveredButtonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.selectedButtonBackground};
    color: ${({ theme }) => theme.colors.hoveredButtonText};
    border: none;
  }
  & > div {
    margin-right: 10px;
    margin-top: -25px;
  }
`;
