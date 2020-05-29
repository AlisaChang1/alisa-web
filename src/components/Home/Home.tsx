import React from 'react';
import background from '../images/36401449295_e25881d153_b.jpg';
import { Background, Name, Intro } from './styles';

const Home = () => {
    return (
        <Background>
            {/* <Background src={background}></Background> */}
            <Name>Hi! My name is</Name>
            <Intro>Alisa Chang</Intro>
        </Background>
    );
};

export default Home;
