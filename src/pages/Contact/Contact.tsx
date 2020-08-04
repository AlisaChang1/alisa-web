import React from "react";
import {
  StyledPhoneIcon,
  Background,
  ContactContainer,
  ContactMethod,
  ContactInformationContainer,
  StyledEmailIcon,
  StyledInstagramIcon,
  StyledLinkedinIcon,
  ReachOutContainer,
} from "./styles";
import {
  ContactInformation,
  PhoneNumber,
  Email,
  Instagram,
  LinkedIn,
  ReachOut,
} from "../../constants/index";

const Contact = () => {
  return (
    <>
      <Background />
      <ContactContainer>{ContactInformation}</ContactContainer>
      <ContactMethod>
        <StyledPhoneIcon />
        <ContactInformationContainer>{PhoneNumber}</ContactInformationContainer>
      </ContactMethod>
      <ContactMethod>
        <StyledEmailIcon />
        <ContactInformationContainer>{Email}</ContactInformationContainer>
      </ContactMethod>
      <ContactMethod>
        <StyledInstagramIcon />
        <ContactInformationContainer>{Instagram}</ContactInformationContainer>
      </ContactMethod>
      <ContactMethod>
        <StyledLinkedinIcon />
        <ContactInformationContainer>{LinkedIn}</ContactInformationContainer>
      </ContactMethod>
      <ReachOutContainer>{ReachOut}</ReachOutContainer>
    </>
  );
};

export default Contact;
