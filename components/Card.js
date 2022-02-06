import { useState } from "react";
import { useRouter } from "next/router";

import Result from "./Result";
import Option from "./Option";

import Container from "../styles/Styled.Container";
import Flex from "../styles/Styled.Flex";

import { StyledCard } from "./styled/Card.styled";
import { StyledText } from "./styled/Text.styled";
import { StyledImage } from "./styled/Image.styled";
import { StyledButton } from "./styled/Button.styled";

import QuestionImage from "../public/images/undraw_adventure_4hum 1.svg";
import { questions } from "../public/data";

const Card = () => {
  const router = useRouter();

  let { question_id } = router.query;
  question_id = Number(question_id);
  
  const [selected, setSelect] = useState({});
  const [truthness, setTruthness] = useState(false);
  const [mark, setMark] = useState(0);

  const { text, options } =
    question_id < questions.length && questions[question_id];

  const handleOptionSelect = (option) => {
    option.isSelected = true;
    option.isTrue && setTruthness(true);
    option.isTrue ? setMark(mark + 1) : setMark(mark - 1);
    setSelect(option);
  };

  const handleClickNext = () => {
    setSelect({});
    setTruthness(false);
    question_id += 1;
    router.push(`/questions/${question_id}`);
  };

  const handleClickTryAgain = () => {
    setMark(0);
    setSelect({});
    setTruthness(false);
    questions.map((item) =>
      item.options.map((item) => (item.isSelected = false))
    );
    question_id = 0;
    router.push(`/`);
  };
  return (
    <StyledCard>
      <Flex>
        {question_id < questions.length && (
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
        {question_id < questions.length ? (
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

      <Flex justify='flex-end'>
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
