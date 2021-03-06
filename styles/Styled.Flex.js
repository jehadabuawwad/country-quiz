import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => (justify === "flex-end" ? "flex-end" : "center")};
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Flex;
