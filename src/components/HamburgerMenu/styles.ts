import styled from "styled-components";
import { Toolbar, ListItem } from "@material-ui/core";

export const StyledToolBar = styled(Toolbar)`
  background-color: pink;
`;

export const StyledListItem = styled(ListItem)`
  // padding: 28px 16px;
  // font-size: 20px;
  font-family: "Arial";
  font-weight: bold;
  // float: left;
  // display: block;
  // color: black;
  // text-align: center;
  // cursor: pointer;
  a {
    color: grey;
    text-decoration: none;
  }
  a:hover {
    color: pink;
    text-decoration: none;
  }
`;
