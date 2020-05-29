import styled, { keyframes } from 'styled-components';

// export const Background = styled.img`
//   background-color: pink;
//   height: 100%;
//   margin-top: 0;
//   width: 100%;
// `;

export const Background = styled.div`
  height: 100%;
  width: 100%
  background-color: grey;
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
