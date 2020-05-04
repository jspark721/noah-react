import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import About from '../About';
import Products from '../Products';
import Downloads from '../Downloads';
import Contact from '../Contact';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      menuVisibility: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
      menuVisibility: !this.state.menuVisibility,
    });
  }
  render() {
    let visibility = 'hide';
    if (this.state.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div>
        <div id='header'>
          <nav className='navbar'>
            <div
              className='menu-icon'
              onMouseDown={this.props.handleMouseDown}
              menuVisibility={this.state.visible}
            >
              <div className='line top'></div>
              <div className='line bottom'></div>
            </div>
            <div className='title'>
              <p>
                Noah Valve <br />
                <span>Actuation, Inc.</span>
              </p>
            </div>
          </nav>
        </div>
        <div
          id='menu'
          className={visibility}
          onMouseDown={this.props.handleMouseDown}
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/about'>Products</Link>
            </li>
            <li>
              <Link to='/about'>Downloads</Link>
            </li>
            <li>
              <Link to='/about'>Contact</Link>
            </li>
          </ul>
        </div>
        <Router>
          <About path='/about' />
          <Products path='/products' />
          <Downloads path='/downloads' />
          <Contact path='/contact' />
        </Router>
      </div>
    );
  }
}

export default Header;
