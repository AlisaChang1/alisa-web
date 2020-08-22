import React from "react";
import {
  Background,
  IntroContainer,
  Header,
  IntroText,
  StyledLink,
} from "./styles";
import {
  LifeCoachingTitle,
  LifeCoachingIntro,
  LifeCoachingEthics,
} from "../../constants";

const LifeCoaching = () => {
  return (
    <>
      <Background />
      <Header>{LifeCoachingTitle}</Header>
      <IntroContainer>
        <IntroText>
          {LifeCoachingIntro}
          {LifeCoachingEthics}
          <br />
          <StyledLink href='https://certifiedcoachesfederation.com/about/code-of-ethics/'>
            Code of Ethics
          </StyledLink>
        </IntroText>
      </IntroContainer>
    </>
  );
};

export default LifeCoaching;
