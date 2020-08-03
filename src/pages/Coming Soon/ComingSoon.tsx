import React from "react";
import { ComingSoonTitle, ComingSoonMessage } from "../../constants/index";
import {
  ComingSoonContainer,
  StyledContainer,
  Background,
  ComingSoonMessageContainer,
  Image,
} from "./styles";
import ComingSoonImage from "../../images/ComingSoonImages/14-512.png";
import isMobile from "../../helpers/isMobile";

const ComingSoon = () => {
  return (
    <>
      <Background />
      <StyledContainer isMobile={isMobile()}>
        <Image src={ComingSoonImage} />
        <ComingSoonContainer>{ComingSoonTitle}</ComingSoonContainer>
        <ComingSoonMessageContainer>
          {ComingSoonMessage}
        </ComingSoonMessageContainer>
      </StyledContainer>
    </>
  );
};

export default ComingSoon;
