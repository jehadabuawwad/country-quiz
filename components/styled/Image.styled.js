import Image from "next/image";

import styled from "styled-components";

export const StyledImage = styled(Image)`
  position: relative;
  top: -75px;
  right: -15px;
  visibility: ${({ id }) => (id > 12 ? "visible" : "hidden")};
`;
