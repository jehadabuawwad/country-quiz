import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  & > div,
  & > ul {
    flex: 1;
  }
`;
