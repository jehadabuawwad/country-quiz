import { useState } from "react";

import { Question } from "./styled/Card.styled";
import { Flex } from "../styles/Styled.Flex";
import { Photo } from "./styled/Photo.styled";

import QuestionImage from "../public/images/undraw_adventure_4hum 1.svg";
import { questions } from "../public/data";

const QuestionSection = () => {
  const [id, setId] = useState(1);

  return (
    <>
      <Question>
        <Flex id='question-head'>
          <h1 id='question-title'>Country quiz</h1>
          <Photo
            as='img'
            title='question-image'
            src={QuestionImage}
            alt='question-image'
          />
        </Flex>
        <Flex id='question-body'></Flex>
      </Question>
    </>
  );
};

export default QuestionSection;
