import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import AllTitlesList from AllTitlesList.js;
// import AllActorssList from AllActorssList.js;
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
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="dropdown">Where Was That Filmed?</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/AllTitlesList.js">All Titles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AllActorsList.js">All Actors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/TourByTitle.js">Tour By Title</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;