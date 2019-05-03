import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import AllTitlesList from './AllTitlesList';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import AllActorsList from './AllActorsList';
import SearchBox from './Search';
// import TourByTitle from TourByTitle.js;


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
      <Router>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="dropdown">Where Was That Filmed?</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <SearchBox />
            <Nav navbar>
              <NavItem>
                <Link to='/AllTitles'>All Titles</Link>
              </NavItem>
              <NavItem>
                <Link to='/AllActors'>All Actors</Link>
              </NavItem>
              <NavItem>
                <Link to='/OAuth'>Sign In Unfortunatly</Link>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
      <Route path='/AllTitles' component={AllTitlesList}/>
      <Route path='/AllActors' component={AllActorsList}/>
      <Route path='/OAuth' />
      </Router>


    );
  }
}

export default Menu;