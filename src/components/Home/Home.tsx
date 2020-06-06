import React, { useState } from 'react';
import background from '@src/components/images/36401449295_e25881d153_b.jpg';
import { Background, Name, Intro, Paragraph, IntroContainer } from './styles';
import { myName, AlisaChang, Paragraph1, Paragraph2 } from '../../constants';

const Home = () => {
    return (
        <>
            <Background />
            <IntroContainer>
                <Name>{myName}</Name>
                <Intro>{AlisaChang}</Intro>
                <Paragraph>{Paragraph1}</Paragraph>
                <Paragraph>{Paragraph2}</Paragraph>
            </IntroContainer>
        </>
    );
};

export default Home;
