import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";
import Head from "next/head";

export default (props) => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
      <Header></Header>
      {props.children}
    </Container>
  );
};
