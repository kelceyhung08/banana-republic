import {
  HeadingSpan,
  InfoContainer,
  InfoRightContainer,
  TextSpan,
  TextSpanContainer,
} from "./create-account.style";

interface CreateAccountInfoProps {
  isOpen?: boolean;
}

function CreateAccountInfo({ isOpen = false }: CreateAccountInfoProps) {
  return (
    <InfoRightContainer $isOpen={isOpen}>
      <InfoContainer>
        <HeadingSpan> My world today</HeadingSpan>
        <TextSpanContainer>
        <TextSpan>
          <p>
            Pellenteque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. <b style={{ textDecoration: 'underline' }}>View all days</b>  eu 
            libero sit amet quam egestas semper.
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit
            amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
            sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
            dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus,
            neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
            eu erat. Aliquam erat


          </p>
        </TextSpan>
        </TextSpanContainer>
      </InfoContainer>
    </InfoRightContainer>
  );
}

export default CreateAccountInfo;
