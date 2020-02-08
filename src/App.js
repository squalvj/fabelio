import React, { Component, Fragment } from 'react'
import Home from './container/Home'
import Header from 'components/Header'
import './styles/css/core.scss';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div id="app">
          <Home />
        </div>
      </Fragment>
      )
    }
}
