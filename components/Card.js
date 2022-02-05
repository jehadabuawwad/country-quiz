import { useState } from "react";

import Container from "../styles/Styled.Container";
import Flex from "../styles/Styled.Flex";

import Result from "./Result";
import Option from "./Option";

import { StyledCard } from "./styled/Card.styled";
import { StyledText } from "./styled/Text.styled";
import { StyledImage } from "./styled/Image.styled";
import { StyledButton } from "./styled/Button.styled";

import QuestionImage from "../public/images/undraw_adventure_4hum 1.svg";
import { questions } from "../public/data";

const Card = () => {
  const [id, setId] = useState(0);
  const [selected, setSelect] = useState({});
  const [truthness, setTruthness] = useState(false);
  const [mark, setMark] = useState(0);

  const { text, options } = id < questions.length && questions[id];

  const handleOptionSelect = (option) => {
    option.isSelected = true;
    option.isTrue && setTruthness(true);
    option.isTrue ? setMark(mark + 1) : setMark(mark - 1);
    setSelect(option);
  };

  const handleClickNext = () => {
    setId(id + 1);
    setSelect({});
    setTruthness(false);
  };

  const handleClickTryAgain = () => {
    setId(0);
    setMark(0);
    setSelect({});
    setTruthness(false);
    questions.map((item) =>
      item.options.map((item) => (item.isSelected = false))
    );
  };
  return (
    <StyledCard>
      <Flex>
        {id < questions.length && (
          <>
            <StyledText
              tp='-125px'
              title
              color={({ theme }) => theme.colors.appTitle}
            >
              Country quiz
            </StyledText>
            <StyledImage
              as='img'
              src={QuestionImage}
              alt='question-image'
              marker='intro-image'
            />
          </>
        )}
      </Flex>

      <Container>
        <StyledText tp='-40px' question>
          {text}
        </StyledText>
        {id < questions.length ? (
          options.map((item, index) => (
            <Option
              key={index}
              option={item}
              selected={selected}
              onOptionSelect={handleOptionSelect}
            />
          ))
        ) : (
          <Result mark={mark} onTryAgain={handleClickTryAgain} />
        )}
      </Container>

      <Flex js='flex-end'>
        {selected && truthness && (
          <StyledButton
            width='116px'
            height='56px'
            onClick={handleClickNext}
            next
          >
            Next
          </StyledButton>
        )}
      </Flex>
    </StyledCard>
  );
};

export default Card;
