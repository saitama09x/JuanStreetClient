import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class AdminSidebar extends Component{



  render(){

      return (
          <div className="left-side-menu">
            <div className="slimscroll-menu">
              <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                  <li className="mm-active">
                    <a to="/dashboard" className="active">
                      <i className="dripicons-meter" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="">
                    <a to="/dashboard" className="">
                      <i className="dripicons-meter" />
                      <span>Pages</span>
                    </a>
                  </li>
                  <li className="">
                    <a to="/dashboard" className="">
                      <i className="dripicons-meter" />
                      <span>Posts</span>
                    </a>
                  </li>
                </ul>
              </div>
             </div>
            </div>
      )

  } 

}

export default AdminSidebar
   