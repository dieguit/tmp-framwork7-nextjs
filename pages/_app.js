import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import Framework7React, { App, View } from 'framework7-react';
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Init F7-React Plugin
Framework7.use(Framework7React);

const f7params = {
  routes: [
    {
      path: '/test/',
      url: 'test',
    },
  ],
  name: 'My App',
  id: 'com.myapp.test',
};

export default class MyApp extends NextApp {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Victu App</title>
        </Head>
        <App params={f7params}>
          <Component {...pageProps} />
          <View main url="/" />
        </App>
      </>
    );
  }
}
