import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
export default (props) =>
{
  return(
    <Container>
    <Head> // css files should be used from a local host instead of loading them through cloudflare.com
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
    </ Head>
      <Header />
        {props.children}
    </Container>
  );
};
