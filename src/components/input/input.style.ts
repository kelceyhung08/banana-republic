import styled from "styled-components";

//Input
export const InputGroup = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  width: 150px;
  color: #373d40;
  font-weight: 400;
  @media (max-width: 500px) {
    margin-bottom: 5px;
    font-size: 21px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #f5f8f9;
  background-color: #f5f8f9;

  &::placeholder {
    color: #a3a3a3;
  }

  &:focus {
    border-color: #f5f8f9;
    background-color: #ffffff;
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 22px;
    padding: 18px;
    border-radius: 6px;

    &:focus {
      border-color: #f5f8f9;
      background-color: #373d40;
      outline: none;
    }
  }
`;

//DateInput
export const DateInputContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const DateIcon = styled.img`
  position: absolute;
  right: 10px;
  width: 22px;
  height: 22px;
  pointer-events: none;
`;

//RadioButtonInputGroup
export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const RadioButtonLabel = styled.label`
  margin-right: 40px;
  color: #a3a3a3;
  @media (max-width: 500px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const RadioButtonInput = styled.input`
  display: none;
`;

export const RadioImageContainer = styled.div<{ $isSelected: boolean }>`
  border-radius: 50%;
  background-color: ${(props) => (props.$isSelected ? "#a3a3a3" : "#f5f8f9")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  margin-right: 20px;
  @media (max-width: 500px) {
    margin-bottom: 20px;
    height: 50px;
    width: 50px;
  }
`;

export const RadioButtonImage = styled.img`
  width: 22px;
  height: auto;

  ${RadioButtonInput}:checked + & {
    border-color: #007bff;
  }

  @media (max-width: 500px) {
    width: 28px;
  }
`;
