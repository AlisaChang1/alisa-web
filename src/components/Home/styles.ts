import styled, { keyframes, createGlobalStyle } from 'styled-components';
import background from '../images/36401449295_e25881d153_b.jpg';

export const Background = createGlobalStyle`
    html, body {
      background-image: url(${background});
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

export const Intro = styled.h1`
    left: 0;
    line-height: 300px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 48%;
    width: 100%;
    animation: ${Fade} 4s ease-in;
    color: #fa1b87;
    font-size: 100px;
    font-family: 'Monaco';
`;

export const Name = styled.h2`
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 42%;
    width: 100%;
    animation: ${Fade} 4s ease-in;
    color: #fa1b87;
    font-size: 30px;
    font-family: 'Monaco';
`;
