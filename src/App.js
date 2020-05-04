import 'react-hot-loader';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Link } from '@reach/router';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Go to <Link to='/about'>About</Link>!
        </h1>

        <Router>
          <About path='/about' />
        </Router>
      </div>
    );
  }
}

export default hot(App);
