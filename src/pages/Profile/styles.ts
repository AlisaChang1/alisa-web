import styled, { createGlobalStyle } from "styled-components";
import { Card, CardContent, CardMedia, Container } from "@material-ui/core";

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

export const ResumeContainer = styled(Card)`
  width: 90%;
  height: min-content;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: black !important;
`;

export const StyledCardContent = styled(CardContent)`
  display: inline-flex;
`;

export const CardMessage = styled.div`
  font-family: Arial;
  color: pink;
  font-weight: bolder;
  font-size: 17px;
`;

export const Image = styled.img`
  height: 90px;
  width: 90px;
  padding-right: 30px;
`;
