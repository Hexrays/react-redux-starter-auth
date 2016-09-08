import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      // Show a link to signout
      return [
        <li key={1} ><Link to="/page1">page1</Link></li>,
        <li key={2} ><Link to="/page2">page2</Link></li>,
        <li key={3} ><Link to="/feature">feature</Link></li>,
        <li key={4} ><Link to="/signout" >Sign Out</Link></li>
      ];
    } else {
      // show a link to sign in or sign up
      return [
      <li key={1} ><Link to="/page1">page1</Link></li>,
      <li key={2} ><Link to="/page2">page2</Link></li>,
      <li key={3}><Link to="/signin" >Sign In</Link></li>,
      <li key={4}><Link to="/signup" >Sign Up</Link></li>,
      ];
    }
  }

  render() {
    const {title} = this.props;
    return (
      <header className="header">
        <nav >
        <h1 className="header__title">
          <Link to="/">{title}</Link>
        </h1>
        <ul>
          {this.renderLinks()}
        </ul>
        </nav>
      </header>
    );
  }
};

function mapStateToProps(state) {
  return {
   authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(Header);