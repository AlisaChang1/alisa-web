import PhoneIcon from "@material-ui/icons/Phone";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Box } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Background = createGlobalStyle`
    html, body {
      background-image: url('https://audit-invest.com.ua/wp-content/uploads/2017/06/Savin-NY-Website-Background-Web1-kopiya.jpg');
      background-size: cover;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
`;

export const ContactContainer = styled(Container)`
  width: 100%;
  text-align: center;
  background-color: pink;
  color: white;
  font-family: Arial-black;
  font-size: 40px;
  margin: 80px 0px 60px 0px;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  color: pink;
  margin-left: auto;
`;

export const ContactMethod = styled(Box)`
  color: transparent;
  display: inline-flex;
  margin-top: 20px;
  height: fit-content !important;
  width: 100%;
`;

export const ContactInformationContainer = styled(Box)`
  font-family: Arial;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-right: auto;
  height: fit-content;
`;

export const StyledEmailIcon = styled(EmailIcon)`
  color: pink;
  margin-left: auto;
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  color: pink;
  margin-left: auto;
`;

export const StyledLinkedinIcon = styled(LinkedInIcon)`
  color: pink;
  margin-left: auto;
`;

export const ReachOutContainer = styled(Container)`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color: pink;
  background-color: white;
  text-align: center;
  margin-top: 40px;
  width: 80% !important;
`;
