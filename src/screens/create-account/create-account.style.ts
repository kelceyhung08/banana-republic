import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

//Main screen
export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @media (min-width: 750px) {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
  }
`;

export const LeftContainer = styled.div`
  background-color: #ffd300;
  padding: 10px 30px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
  }
`;

export const RightContainer = styled.div`
  background-color: #ffffff;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    height: 150vh;
    background-color: #212224;
  }
`;

export const ArrowImageContainer = styled.div`
  margin-top: 55px;
  border-radius: 50%;
  background-color: #373d40;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
`;

export const Image = styled.img<{ $isOpen?: boolean }>`
  max-width: 100%;
  height: auto;
`;

export const ArrowImage = styled.img<{ $isOpen?: boolean }>`
  max-width: 100%;
  height: auto;
  transition: transform 0.7s ease;
  transform: rotate(${(props) => (props.$isOpen ? "180deg" : "0deg")});
  @media (max-width: 500px) {
    transform: rotate(${(props) => (props.$isOpen ? "270deg" : "90deg")});
  }
`;

export const HeadingSpan = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
  color: #373d40;
`;

export const SubHeadingSpan = styled.span`
  font-size: 20px;
  color: #373d40;
`;

// Form
export const FormContainer = styled.div`
  width: 85%;
  max-width: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

interface ButtonProps {
  $cancel?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  width: 140px;
  margin-left: 15px;
  margin-right: 0px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;

  background-color: ${(props) => (props.$cancel ? "#f5f8f9" : "#49c8a8")};
  color: ${(props) => (props.$cancel ? "#373d40" : "#ffffff")};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 60px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    font-size: 20px;
    border-radius: 6px;
  }
`;

//Info
export const InfoRightContainer = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #ff9200;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.1s, visibility 0s;
  transition-delay: ${(props) => (props.$isOpen ? "0s" : "0.7s")};
`;

export const InfoContainer = styled.div`
  width: 80%;
  max-width: 560px;
  background-color: #ff9200;
`;

export const TextSpanContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const TextSpan = styled.span`
  font-size: 17px;
  color: #373d40;
`;


export const SlidePanel = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  position: ${(props) =>
    props.$isOpen ? "absolute" : "fixed"}; 

  overflow: hidden;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.7s ease, visibility 0s linear 0.7s, transform 0.7s ease;
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    transform: ${(props) =>
      props.$isOpen ? "translateY(0)" : "translateY(100%)"};
  }
`;
