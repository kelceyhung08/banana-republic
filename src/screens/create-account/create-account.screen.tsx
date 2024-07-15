import {
  Container,
  LeftContainer,
  RightContainer,
  Image,
  HeadingSpan,
  SubHeadingSpan,
  ArrowImageContainer,
  SlidePanel,
  ArrowImage,
} from "./create-account.style";
import face from "../../assets/face.svg";
import arrow from "../../assets/arrow.svg";
import CreateAccountForm from "./create-account-form.component";
import CreateAccountInfo from "./create-account-info.component";
import { useEffect, useRef, useState } from "react";

function CreateAccountScreen() {
  const [showInfo, setShowInfo] = useState(false);
  const SidePanelRef = useRef<HTMLDivElement>(null);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;
    if (showInfo && SidePanelRef.current && isMobile) {
      SidePanelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showInfo]); 

  return (
    <Container>
      <LeftContainer>
        <Image src={face}></Image>
        <HeadingSpan>Front-end challenge!</HeadingSpan>
        <SubHeadingSpan>
          This is a design that you will need <br />
          to code up and impress us.
        </SubHeadingSpan>
        <ArrowImageContainer onClick={toggleInfo}>
          <ArrowImage src={arrow} $isOpen={showInfo}></ArrowImage>
        </ArrowImageContainer>
      </LeftContainer>
      <RightContainer>
        <CreateAccountForm></CreateAccountForm>
        <SlidePanel ref={SidePanelRef} $isOpen={showInfo}>
          <CreateAccountInfo isOpen={showInfo}></CreateAccountInfo>
        </SlidePanel>
      </RightContainer>
    </Container>
  );
}

export default CreateAccountScreen;
