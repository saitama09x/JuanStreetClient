import React from 'react'
import App from 'next/app'

import "./assets/css/styles.css";
import "./assets/css/colors.css";
import './scss/custom/select2.css'
import "./assets/css/custom.css";
import propserv from '../services/property-services';
import rootReducer from '../redux';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  // static async getInitialProps({ Component, router, ctx }) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   let appProps = {}
    
  //   if (Component.getInitialProps) {
  //       appProps = await Component.getInitialProps(ctx);
  //   }

  //   // Object.assign(appProps, { featureProps : res })
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return ( <Provider store={store}><Component {...pageProps} /></Provider> )
  }
}

export default MyApp