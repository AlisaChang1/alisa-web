import styled, { keyframes, createGlobalStyle } from "styled-components";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";

export const Background = createGlobalStyle`
    html, body {
      background-image: url('https://audit-invest.com.ua/wp-content/uploads/2017/06/Savin-NY-Website-Background-Web1-kopiya.jpg');
      background-size: cover;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
`;

export const Fade = keyframes`
  from {
    color: white;
  }
  to {
    color: #fa1b87;
  }
`;

export const StyledBox = styled(Box)`
  height: 631px;
  width: 100%;
  background-color: transparent;
  margin: 40px auto auto auto !important;
  padding-top: 40px;
  min-width: 539px;
`;

export const NameBox = styled(Box)`
  height: 250px;
  width: 40%;
  margin: 139px auto;
  background-color: pink;
  text-align: center;
  min-width: 355px;
`;

export const InnerNameBox = styled(Box)`
  height: 150px;
  width: 70%;
  margin-top: 54px;
  background-color: white;
  display: inline-block;
`;

export const Name = styled.h1`
  position: relative;
  text-align: center;
  color: black;
  font-size: 44px;
  font-family: cursive;
  opacity: 1;
  padding-top: 12px;
`;

export const Intro = styled.h2`
  position: relative;
  text-align: center;
  width: 100%;
  animation: ${Fade} 4s ease-in;
  color: #fa1b87;
  font-size: 22px;
  font-family: "Monaco";
  padding-top: 15%;
  opacity: 1.5;
`;

export const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 0px 25px 0px 25px;
`;

export const CardContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: inline-flex;
`;

export const Header = styled.div`
  font-family: arial;
  font-size: 28px;
  padding-left: 26px;
  padding-top: 50px;
`;

export const AboutContainer = styled(Box)`
  min-width: 539px;
  background-color: grey;
  min-height: 500px;
  margin-top: 40px;
  text-align: center;
`;

export const AboutText = styled.div`
  font-family: arial;
  font-size: 20px;
  color: white;
  width: 90%;
  margin: auto;
  padding-top: 30px;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 195px;
  height: 200px;
  padding-top: 50px;
`;
