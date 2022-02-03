import Container from "../styles/Styled.Container";

import { StyledImage } from "./styled/Image.styled";
import { StyledText } from "./styled/Text.styled";
import ResultImage from "../public/images/undraw_winners_ao2o 2.svg";

export const Result = ({ mark, onTryAgain }) => {
  return (
    <>
      <Container>
        <StyledText
          tp='-75px'
          title
          color={({ theme }) => theme.colors.appTitle}
        >
          Country quiz
        </StyledText>

        <StyledImage
          as='img'
          title='result-image'
          src={ResultImage}
          alt='result-image'
          marker='result-image'
        />

        <StyledText color={({ theme }) => theme.colors.resultTitle} title>
          Result
        </StyledText>

        <StyledText tp='-10px' body result>
          You Got <span>{mark > 0 ? mark : 0}</span> correct answers
        </StyledText>

        <a tp='10px' onClick={() => onTryAgain()}>
          Try Again
        </a>
      </Container>
    </>
  );
};
