import React, { useState } from 'react';
import background from '@src/components/images/36401449295_e25881d153_b.jpg';
import { Background, Name, Intro } from './styles';

const Home = () => {
    return (
        <>
            <Background />
            <Name>Hi! My name is</Name>
            <Intro>Alisa Chang</Intro>
            <div></div>
        </>
    );
};

export default Home;
