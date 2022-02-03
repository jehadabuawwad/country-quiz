import Image from "next/image";

import styled from "styled-components";

export const StyledImage = styled(Image)`
  position: relative;
  top: -75px;
  right: -15px;
  top: ${({ marker }) => (marker === "result-image" && "10px")};
`;
