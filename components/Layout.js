import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";

export default (props) => {
  return (
    <Container>
      <Header></Header>
      {props.children}
    </Container>
  );
};
