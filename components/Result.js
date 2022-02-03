import { ResultCard } from "./styled/Result.styled";
import { Flex } from "../styles/Styled.Flex";

const Result = ({ mark }) => {
  return (
    <>
      <ResultCard>
        <Flex id='question-head'>
          <h1 id='question-title'>Country quiz</h1>
        </Flex>
      </ResultCard>
    </>
  );
};

export default Result;
