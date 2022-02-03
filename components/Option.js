import Container from "../styles/Styled.Container";
import Flex from "../styles/Styled.Flex";

import { StyledOption } from "./styled/Option.styled";
import { FiXCircle } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

const Option = ({ option, selected, truthness, onOptionSelect }) => {
  return (
    <Container>
      <StyledOption
        onClick={() => onOptionSelect(option)}
        status={option.isTrue}
        selected={selected}
        truthness={truthness}
      >
        {option.title}
        {selected && option.isTrue && (
          <Flex>
            <BsCheckLg />
          </Flex>
        )}

        {selected && !option.isTrue && (
          <Flex>
            <FiXCircle />
          </Flex>
        )}
      </StyledOption>
    </Container>
  );
};

export default Option;
