import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink} from 'react-router-dom'
import SearchBox from './Search';
import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (

        <div>
          <Navbar className="navbaby" color="faded" light>
            <NavbarBrand href="/" className="dropdown">Where Was That Filmed?</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
            <img className="profpic"
                  alt="avatar"
                  src={firebase.auth().currentUser.photoURL}/>
                <h6 className="welcometext">Welcome {firebase.auth().currentUser.displayName}</h6>
            <SearchBox />
              <Nav navbar>
                <NavItem>
                  <NavLink to='/AllTitles'>Titles</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/AllActors'>Actors</NavLink>
                </NavItem>
                <NavItem>
                  <button onClick={() => firebase.auth().signOut()}>Logout!</button>
                </NavItem>
              </Nav>
              </Collapse>
          </Navbar>
        </div>



    );
  }
}

export default Menu;