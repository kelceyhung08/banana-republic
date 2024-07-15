import React from "react";
import {
  InputGroup,
  Label,
  RadioButtonContainer,
  RadioButtonImage,
  RadioButtonInput,
  RadioButtonLabel,
  RadioImageContainer,
} from "./input.style";

interface Option {
  value: string;
  label: string;
  imageSrc: string;
  selectedImageSrc: string;
}

interface RadioButtonInputGroupComponentProps {
  label?: string;
  name?: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

function RadioButtonInputGroupComponent({
  label,
  name,
  selectedValue,
  onChange,
  options,
}: RadioButtonInputGroupComponentProps) {
  return (
    <InputGroup>
      <Label>{label}</Label>
      <RadioButtonContainer>
        {options.map((option) => (
           <React.Fragment key={option.value}>
            <RadioButtonInput
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
            />
            <RadioImageContainer
              $isSelected={selectedValue === option.value}
              onClick={() => onChange(option.value)}
            >
              <RadioButtonImage
                src={
                  selectedValue === option.value
                    ? option.selectedImageSrc
                    : option.imageSrc
                }
                alt={option.label}
              />
            </RadioImageContainer>
            <RadioButtonLabel htmlFor={option.value}>
              {option.label}
            </RadioButtonLabel>
            </React.Fragment>
        ))}
      </RadioButtonContainer>
    </InputGroup>
  );
}

export default RadioButtonInputGroupComponent;
