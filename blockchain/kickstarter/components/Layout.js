import React, { Component } from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        <Header />
        {this.props.children}
        {/* <p>footer</p> */}
      </Container>
    );
  }
}

export default Layout;
