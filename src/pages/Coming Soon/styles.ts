import styled, { createGlobalStyle } from "styled-components";
import { Box, Container } from "@material-ui/core";

export const Background = createGlobalStyle`
    html, body {
      background-image: url('https://audit-invest.com.ua/wp-content/uploads/2017/06/Savin-NY-Website-Background-Web1-kopiya.jpg');
      background-size: cover;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
`;

export const StyledContainer = styled(Container)<{ isMobile: boolean }>`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  margin-top: ${({ isMobile }) => (isMobile ? "147px" : "50px")};
  min-width: 539px;
  text-align: center;
`;

export const ComingSoonContainer = styled(Container)`
  font-family: Arial-black;
  font-size: 57px;
  color: white;
  background-color: pink;
  margin-top: 40px;
  display: inline-flex;
  text-align: center;
  height: 86px;
  width: unset;
`;

export const ComingSoonMessageContainer = styled(Container)`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color: black;
  padding-top: 40px;
  text-align: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;
