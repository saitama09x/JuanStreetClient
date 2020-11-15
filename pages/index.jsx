import React from 'react'
import Home from './home'
import propserv from '../services/property-services';

import {
    HashRouter,
    Route,
    Link,
    BrowserRouter, Switch, Router
} from 'react-router-dom'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE
};

export async function getStaticProps(){
    let res = await propserv.getFeatureProps();
    return { props : { featureProps : res }}
}


class MainPage extends React.Component  {


  constructor(props) {
    super(props);
  }

  render(){
      const { featureProps } = this.props
      return <Home featureProps={featureProps} />
  }
  
}

export default MainPage