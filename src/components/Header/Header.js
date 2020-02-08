import './Header.scss'
import React, { Component } from 'react'
export default class Header extends Component {
   render() {
      return (
         <div id="header">
            <div className="flex header-wrapper">
               FABELIO TEST
               <img alt="cool cat" className="header-pic" src={require('styles/img/nyan.gif')} />
            </div>
         </div>
      )
   }
}
