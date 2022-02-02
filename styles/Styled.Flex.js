import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    flex: 1;
    flex-grow: 1;
  }
`;
