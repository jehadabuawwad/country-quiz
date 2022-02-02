import { useState } from "react";

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
  const { text, options } = questions[id];
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
              <Option key={key}>{item.title}</Option>
            </>
          ))}
        </Container>
        <Flex id='question-buttom'>
          <Button onClick={() => setId(id + 1)}>Next</Button>
        </Flex>
      </Card>
    </>
  );
};

export default QuestionSection;
