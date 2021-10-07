import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import MainPage from './Components/pages/mainPage/mainPage';

export default class App extends Component {


  render () {
    return (
      <>
        <Header></Header>
        <MainPage></MainPage>
      </>
    )
  }
;
}

