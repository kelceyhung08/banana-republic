import {
  DateIcon,
  DateInputContainer,
  Input,
  InputGroup,
  Label,
} from "./input.style";
import calendar from "../../assets/calendar.svg";

interface InputComponentProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  isDate?: boolean;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function InputComponent({
  type = "text",
  isDate = false,
  label,
  placeholder,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  value = "",
}: InputComponentProps) {
  return (
    <InputGroup>
      <Label>{label}</Label>
      {isDate ? (
        <>
          <DateInputContainer>
            <Input
              type={type}
              placeholder={placeholder}
              name={name}
              id={id}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              value={value || ""}
            />
            <DateIcon src={calendar} alt="calendar icon" />
          </DateInputContainer>
        </>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={onChange}
          value={value || ""}
        />
      )}
    </InputGroup>
  );
}

export default InputComponent;
