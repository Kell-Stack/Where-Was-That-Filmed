import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink} from 'react-router-dom'
import SearchBox from './Search';


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
            <SearchBox />
              <Nav navbar>
                <NavItem>
                  <NavLink to='/AllTitles'> All Titles BGAHBGHJBhaha</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/AllActors'>All Actors</NavLink>
                </NavItem>
              </Nav>
              </Collapse>
          </Navbar>
        </div>



    );
  }
}

export default Menu;