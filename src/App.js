import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header/header';
import MainPage from './Components/pages/mainPage/mainPage';
import SoundPage from './Components/pages/soundPage/soundPage';
import LightPage from './Components/pages/lightPage/lightPage';
import OrderModal from './Components/orderModal/orderModal';
import StagePage from './Components/pages/stagePage/stagePage';
import Footer from './Components/footer/footer';
import ScrollToTop from './Components/scrollToTop/scrollToTop';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayModal: false,
        modalData: null          
    }
  }
  showOrderModal = (item) => {
    console.log(item);
    this.setState({
        displayModal: true,
        modalData: item
    })
  }
  hideOrderModal = (e) => {
    if (e.target.classList.contains('close')) {
        this.setState({
            displayModal: false
        })
    }
  }

  render () {
    const OrderModalElem = this.state.displayModal
          ? <OrderModal 
              modalData={this.state.modalData}
              hideOrderModal={this.hideOrderModal}
              />
          : null;
    return (
      <div className="app">
      <BrowserRouter>
      <ScrollToTop/>
        {OrderModalElem}
        <Header></Header>
        <Route exact path="/">
          <MainPage
          showOrderModal={this.showOrderModal}
          />
        </Route>
        <Route path="/zvuk">
            <SoundPage
            showOrderModal={this.showOrderModal}
            />
        </Route>
        <Route path="/svet">
            <LightPage
            showOrderModal={this.showOrderModal}
            />
        </Route>
        <Route path="/stage">
            <StagePage
            showOrderModal={this.showOrderModal}
            />
        </Route>
      </BrowserRouter>
      <Footer/>
      </div>
    )
  }
;
}

