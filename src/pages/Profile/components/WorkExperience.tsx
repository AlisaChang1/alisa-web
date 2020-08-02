import React from "react";
import {
  CIBCDescription,
  WaterlooDescription,
  VenngageDescription,
  POFDescription,
} from "../../../constants/index";
import {
  ResumeContainer,
  StyledCardContent,
  Image,
  CardMessage,
} from "../styles";
import CIBCLogo from "../../../images/ResumeImages/CIBC_logo.svg.png";
import WaterlooLogo from "../../../images/ResumeImages/1200px-University_of_Waterloo_seal.svg.png";
import VenngageLogo from "../../../images/ResumeImages/venngage-squarelogo-1480888082777.png";
import POFLogo from "../../../images/ResumeImages/download.png";

const WorkExperience = () => {
  return (
    <>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={WaterlooLogo} />
          <CardMessage>{WaterlooDescription}</CardMessage>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={CIBCLogo} />
          <CardMessage>{CIBCDescription}</CardMessage>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={VenngageLogo} />
          <CardMessage>{VenngageDescription}</CardMessage>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={POFLogo} />
          <CardMessage>{POFDescription}</CardMessage>
        </StyledCardContent>
      </ResumeContainer>
    </>
  );
};

export default WorkExperience;
