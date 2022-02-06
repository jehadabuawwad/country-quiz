import Container from "../styles/Styled.Container";
import Flex from "../styles/Styled.Flex";

import { StyledOption } from "./styled/Option.styled";
import { FiXCircle } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

const Option = ({ option, selected, onOptionSelect }) => {
  return (
    <Container>
      <StyledOption
        onClick={() => onOptionSelect(option)}
        status={option.isTrue}
        selected={option.isSelected}
      >
        {option.title}
        <Flex justify='flex-end'>
          {selected.isSelected === option.isSelected &&
            (option.isSelected && option.isTrue ? (
              <BsCheckLg />
            ) : (
              <FiXCircle />
            ))}
        </Flex>
      </StyledOption>
    </Container>
  );
};

export default Option;
