import styled from "styled-components";

export const StyledOption = styled.div`
  width: 400px;
  height: 56px;
  background-color: ${({ status, theme, selected }) =>
    selected && (status ? theme.colors.trueAnswer : theme.colors.wrongAnswer)};
  border-radius: 12px;
  border: ${({ selected }) =>
    !selected ? "2px solid rgba(96, 102, 208, 0.7)" : "none"};
  margin-top: 15px;
  padding-top: 15px;
  padding-left: 18px;
  padding-right: 10px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ theme, selected }) => selected && theme.colors.hoveredButtonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoveredButtonBackground};
    color: ${({ theme }) => theme.colors.hoveredButtonText};
    border: none;
  }
  & > div {
    margin-right: 10px;
    margin-top: -25px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 360px;
  } ;
`;
