import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

import Container from "../styles/Styled.Container";
import Flex from "../styles/Styled.Flex";

import { StyledCard } from "./styled/Card.styled";
import { StyledText } from "./styled/Text.styled";
import { StyledImage } from "./styled/Image.styled";
import { StyledOption } from "./styled/Option.styled";
import { StyledButton } from "./styled/Button.styled";

import QuestionImage from "../public/images/undraw_adventure_4hum 1.svg";
import { questions } from "../public/data";

const Card = () => {
  const [id, setId] = useState(0);
  const [selected, setSelect] = useState("");
  const [truthness, setTruthness] = useState(false);
  const [mark, setMark] = useState(0);

  const { text, options } = id < questions.length && questions[id];

  const handleOptionSelect = (option) => {
    setSelect(option);
    option.isTrue && setTruthness(true);
    option.isTrue ? setMark(mark + 1) : setMark(mark - 1);
  };

  const handleClickNext = () => {
    setId(id + 1);
    setTruthness(false);
    setSelect("");
  };

  return (
    <StyledCard>
      <Flex>
        <StyledText title>Country quiz</StyledText>
        <StyledImage
          as='img'
          src={QuestionImage}
          alt='question-image'
          id={id}
        />
      </Flex>
      <Container>
        <StyledText question>{text}</StyledText>
        {options &&
          options.map((item, key) => (
            <>
              {item.isTrue ? (
                <StyledOption
                  onClick={() => handleOptionSelect(item)}
                  key={key}
                  bg={({ theme }) => theme.colors.trueAnswer}
                  selected={selected}
                >
                  {item.title}
                  {selected && (
                    <Flex>
                      <BsCheckLg />
                    </Flex>
                  )}
                </StyledOption>
              ) : (
                <StyledOption
                  onClick={() => handleOptionSelect(item)}
                  key={key}
                  bg={({ theme }) => theme.colors.wrongAnswer}
                  selected={selected}
                >
                  {item.title}
                  {selected && (
                    <Flex>
                      <FiXCircle />
                    </Flex>
                  )}
                </StyledOption>
              )}
            </>
          ))}
      </Container>

      <Flex js='flex-end'>
        {selected && truthness && (
          <StyledButton width="116px" height="56px" onClick={handleClickNext} next>
            Next
          </StyledButton>
        )}
      </Flex>
    </StyledCard>
  );
};

export default Card;
