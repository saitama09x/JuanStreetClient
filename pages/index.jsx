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
    let provinces = await propserv.getProvince()
    
    var provarr = [];
    if(provinces){
      for(var i in provinces){
          provarr.push({label : provinces[i].provDesc, value : provinces[i].provDesc})
      }
    }
    return { props : { featureProps : res, proptypes : proptypes, provinces : provarr }}
}


class MainPage extends React.Component  {


  constructor(props) {
    super(props);
  }

  render(){
      const { featureProps, proptypes, provinces } = this.props

      return <Home featureProps={featureProps} proptypes={proptypes} provinces={provinces}/>
  }
  
}

export default MainPage