import styled from "styled-components";

export const NavBar = styled.nav`
  height: 80px;
  background-color: rgba(177, 206, 241, 0.5);
`;
export const Options = styled.a`
  float: left;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
export const Logo = styled.img`
  padding: 28px 16px;
  font-size: 20px;
  font-family: "Papyrus";
  float: left;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  hover {
    color: pink;
  }
  height: 40px;
  width: 40px;
  padding: 19px 16px;
`;
export const Resume = styled.div`
  padding: 28px 16px;
  font-size: 20px;
  font-family: "Arial";
  float: left;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  a {
    color: pink;
  }
`;
