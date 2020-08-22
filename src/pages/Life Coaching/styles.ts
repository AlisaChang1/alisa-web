import styled, { createGlobalStyle } from "styled-components";
import { Container } from "@material-ui/core";

export const Background = createGlobalStyle`
    html, body {
      background-image: url('https://audit-invest.com.ua/wp-content/uploads/2017/06/Savin-NY-Website-Background-Web1-kopiya.jpg');
      background-size: cover;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
`;

export const Header = styled(Container)`
  width: 100%;
  text-align: center;
  background-color: pink;
  color: white;
  font-family: Arial-black;
  font-size: 40px;
  margin: 80px 0px 60px 0px;
`;

export const IntroContainer = styled(Container)`
  background-color: grey;
  height: min-content;
  width: 90% !important;
`;

export const IntroText = styled.div`
  color: white;
  font-family: arial;
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 1.4;
`;

export const StyledLink = styled.a`
  color: pink;
  :hover {
    color: black;
  }
`;
