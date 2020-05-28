import React from 'react';
import background from '../images/36401449295_e25881d153_b.jpg';
import { Background } from './styles';

const Home = () => {
  return (
    <div>
      <Background src={background}></Background>
      <h2>Hi! My name is</h2>
      <h1>Alisa Chang</h1>
    </div>
  );
};

export default Home;
