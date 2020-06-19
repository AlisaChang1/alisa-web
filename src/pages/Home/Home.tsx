import React from "react";
import { Background, Header, StyledBox, NameBox, Name } from "./styles";
import { myName, AlisaChang, Paragraph1, Paragraph2 } from "../../constants";
import CardContainer from "./components/CardContainer";
// import WaterlooLogo from '../images/HomeImages/1200px-University_of_Waterloo_seal.svg.png';

const Home = () => {
  return (
    <>
      <Background />
      <StyledBox>
        <NameBox>
          <Name>{AlisaChang}</Name>
        </NameBox>
      </StyledBox>
      <Header>More Information</Header>
      <CardContainer />
    </>
  );
};

export default Home;
