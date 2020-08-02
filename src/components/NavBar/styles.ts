import styled from "styled-components";

export const NavBar = styled.nav`
  height: 80px;
  background-color: rgba(250, 250, 250, 1);
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
  height: 40px;
  width: 40px;
  padding: 19px 16px;
`;
export const Links = styled.div`
  padding: 28px 16px;
  font-size: 20px;
  font-family: "Arial";
  font-weight: bold;
  float: left;
  display: block;
  color: black;
  text-align: center;
  cursor: pointer;
  a {
    color: grey;
    text-decoration: none;
  }
  a:hover {
    color: pink;
    text-decoration: none;
  }
`;
