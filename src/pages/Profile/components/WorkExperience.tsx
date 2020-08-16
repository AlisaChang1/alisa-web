import React from "react";
import {
  CIBCDescription,
  WaterlooDescription,
  VenngageDescription,
  POFDescription,
  WaterlooDate,
  VenngageDate,
  CIBCDate,
  POFDate,
} from "../../../constants/index";
import {
  ResumeContainer,
  StyledCardContent,
  Image,
  CardMessage,
  DateContainer,
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
          <div>
            <DateContainer>{WaterlooDate}</DateContainer>
            <CardMessage>{WaterlooDescription}</CardMessage>
          </div>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={CIBCLogo} />
          <div>
            <DateContainer>{CIBCDate}</DateContainer>
            <CardMessage>{CIBCDescription}</CardMessage>
          </div>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={VenngageLogo} />
          <div>
            <DateContainer>{VenngageDate}</DateContainer>
            <CardMessage>{VenngageDescription}</CardMessage>
          </div>
        </StyledCardContent>
      </ResumeContainer>
      <ResumeContainer>
        <StyledCardContent>
          <Image src={POFLogo} />
          <div>
            <DateContainer>{POFDate}</DateContainer>
            <CardMessage>{POFDescription}</CardMessage>
          </div>
        </StyledCardContent>
      </ResumeContainer>
    </>
  );
};

export default WorkExperience;
