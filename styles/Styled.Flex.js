import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  & > div {
    flex: 1;
    flex-grow: 1;
  }
`;
