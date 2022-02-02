import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

import { Container } from "./styled/Container.styled";
import { Flex } from "../styles/Styled.Flex";
import { Card } from "./styled/Card.styled";
import { Photo } from "./styled/Photo.styled";
import { Option } from "./styled/Option.styled";
import { Button } from "./styled/Button.styled";

import QuestionImage from "../public/images/undraw_adventure_4hum 1.svg";
import { questions } from "../public/data";

const QuestionSection = () => {
  const [id, setId] = useState(1);
  const [selected, Select] = useState("");
  const [truthness, setTruthness] = useState(false);
  const [mark, setMark] = useState(0);

  const { text, options } = questions[id];

  const handleOptionSelect = (option) => {
    Select(option);
    option.isTrue && setTruthness(true);
    option.isTrue ? setMark(mark + 1) : setMark(mark - 1);
  };

  const handleClickNext = (option) => {
    setId(id + 1);
    setTruthness(false);
    Select("");
    console.log(mark);
  };
  return (
    <>
      <Card>
        <Flex id='question-head'>
          <h1 id='question-title'>Country quiz</h1>
          <Photo
            as='img'
            title='question-image'
            src={QuestionImage}
            alt='question-image'
          />
        </Flex>
        <Container id='question-text'>
          <h1 id='question-text'>{text}</h1>
        </Container>
        <Container id='question-options'>
          {options.map((item, key) => (
            <>
              {item.isTrue ? (
                <Option
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
                </Option>
              ) : (
                <Option
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
                </Option>
              )}
            </>
          ))}
        </Container>
        <Flex id='question-buttom'>
          {selected && truthness && (
            <Button onClick={() => handleClickNext()}>Next</Button>
          )}
        </Flex>
      </Card>
    </>
  );
};

export default QuestionSection;
