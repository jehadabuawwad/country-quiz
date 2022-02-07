import styled from "styled-components";

export const StyledCard = styled.div`
  width: 464px;
  height: 515px;
  border-radius: 24px;
  background-color: #fff;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: auto;
    margin-left: auto;
    width: 96%;
  } ;
`;
