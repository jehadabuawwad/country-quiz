import styled from "styled-components";

export const Option = styled.div`
  width: 400px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.selectedButton};
  margin-top: 25px;
  padding-top: 18px;
  padding-left: 18px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ButtonText};

`;
