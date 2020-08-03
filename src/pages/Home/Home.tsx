import React from "react";
import {
  Background,
  Header,
  StyledBox,
  NameBox,
  Name,
  AboutContainer,
  InnerNameBox,
  AboutText,
  Image,
} from "./styles";
import { AlisaChang, AboutSite, MoreInformation } from "../../constants";
import CardContainer from "./components/CardContainer";
import MyImage from "../../images/HomeImages/IMG_0990.jpeg";
import { Switch, Link, Button } from "@material-ui/core";
import { Router, useHistory } from "react-router-dom";
// import WaterlooLogo from '../images/HomeImages/1200px-University_of_Waterloo_seal.svg.png';

const Home = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/about");
  };
  return (
    <>
      <Background />
      <StyledBox>
        <NameBox>
          <InnerNameBox>
            <Name>{AlisaChang}</Name>
          </InnerNameBox>
        </NameBox>
      </StyledBox>
      <AboutContainer>
        <Image src={MyImage}></Image>
        <AboutText>{AboutSite}</AboutText>
        <Button onClick={onClick}>{MoreInformation}</Button>
      </AboutContainer>
      <Header>More Information</Header>
      <CardContainer />
    </>
  );
};

export default Home;
