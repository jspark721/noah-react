import 'react-hot-loader';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Link } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <div className='floating-btn'>
          <button className='btn btn-cta'>Request for Price Quote</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
