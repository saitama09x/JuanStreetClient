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
    let proptypes = await propserv.getPropertyTypeRef();    
    let provinces_listing = await propserv.province_listing_count();    
    return { props : { featureProps : res, proptypes : proptypes, provinces_listing : provinces_listing }}
}


class MainPage extends React.Component  {


  constructor(props) {
    super(props);
  }

  render(){

      return <Home {...this.props}/>
  }
  
}

export default MainPage