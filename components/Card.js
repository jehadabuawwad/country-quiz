import { useState } from "react";

import { Container } from "./styled/Container.styled";
import { Flex } from "../styles/Styled.Flex";
import { Card } from "./styled/Card.styled";
import { Photo } from "./styled/Photo.styled";
import { Option } from "./styled/Option.styled";

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
        <Container>
          <h1 id='question-text'>{text}</h1>
        </Container>
        <Container>
          {options.map((item, key) => (
            <>
              <Option key={key}>{item.title}</Option>
            </>
          ))}
        </Container>
      </Card>
    </>
  );
};

export default QuestionSection;
