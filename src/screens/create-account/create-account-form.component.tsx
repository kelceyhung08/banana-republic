import {
  FormContainer,
  Form,
  Button,
  ButtonContainer,
} from "./create-account.style";
import mars from "../../assets/mars-symbol.svg";
import whiteMars from "../../assets/mars-symbol--white.svg";
import venus from "../../assets/venus-symbol.svg";
import whiteVenus from "../../assets/venus-symbol--white.svg";
import card from "../../assets/card.svg";
import whiteCard from "../../assets/card--white.svg";
import { useState } from "react";
import InputComponent from "../../components/input/input.component";
import RadioButtonInputGroupComponent from "../../components/input/radio-button-input-group.component";

function CreateAccountForm() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMembership, setSelectedMembership] = useState("");
  const [dobInputType, setDobInputType] = useState("text");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    customerId: "",
    membership: "",
  });

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setFormData((prevState) => ({ ...prevState, ["gender"]: gender }));
  };

  const handleMembershipChange = (membership: string) => {
    setSelectedMembership(membership);
    setFormData((prevState) => ({ ...prevState, ["membership"]: membership }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.type = "date";
  };

  const handleDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      e.target.type = "text";
    }
  };
  const clearForm = () => {
    setSelectedGender("");
    setSelectedMembership("");
    setDobInputType("text");
    setFormData({
      name: "",
      dob: "",
      gender: "",
      email: "",
      mobile: "",
      customerId: "",
      membership: "",
    });
  };

  console.log(formData);

  return (
    <FormContainer>
      <Form>
        <InputComponent
          type="text"
          label="Name"
          placeholder="Kendall Jenner"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <RadioButtonInputGroupComponent
          options={[
            {
              value: "male",
              label: "Male",
              imageSrc: mars,
              selectedImageSrc: whiteMars,
            },
            {
              value: "female",
              label: "Female",
              imageSrc: venus,
              selectedImageSrc: whiteVenus,
            },
          ]}
          selectedValue={selectedGender}
          onChange={handleGenderChange}
          label="Gender"
        />
        {/* <DatePickerInputComponent
          label="Date of Birth"
          value={formData.dob}
          name="dob"
          id="dob"
          onChange={handleDateChange}
        /> */}
        <InputComponent
          type={dobInputType}
          label="Date of Birth"
          placeholder="01/02/1983"
          name="dob"
          id="dob"
          isDate
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          value={formData.dob}
          onChange={handleChange}
        />
        <InputComponent
          type="text"
          label="Email"
          placeholder="kendall@email.com"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputComponent
          type="tel"
          label="Mobile"
          placeholder="+91 98765 43210"
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <InputComponent
          type="text"
          label="Customer ID"
          placeholder="576802-ERD0348 45"
          name="customerId"
          id="customerId"
          value={formData.customerId}
          onChange={handleChange}
        />
        <RadioButtonInputGroupComponent
          options={[
            {
              value: "classic",
              label: "Classic",
              imageSrc: card,
              selectedImageSrc: whiteCard,
            },
            {
              value: "silver",
              label: "Silver",
              imageSrc: card,
              selectedImageSrc: whiteCard,
            },
            {
              value: "gold",
              label: "Gold",
              imageSrc: card,
              selectedImageSrc: whiteCard,
            },
          ]}
          selectedValue={selectedMembership}
          onChange={handleMembershipChange}
          label="Membership"
        />
      </Form>
      <ButtonContainer>
        <Button $cancel onClick={clearForm}>
          CANCEL
        </Button>
        <Button>SAVE</Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CreateAccountForm;
