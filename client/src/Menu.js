import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
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
					<NavLink href="/AllTitles">All Titles</NavLink>
				</NavItem>
				<NavItem>
					<NavLink >All Actors</NavLink>
				</NavItem>
				<NavItem>
					<NavLink >All Neighborhoods</NavLink>
				</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import React, {Component} from 'react';
// import { Container, Row, Col } from 'reactstrap';
// // import AllTitlesList from './AllTitlesList.js'
// import './index.css';

// class Menu extends Component {
// 	constructor(){
// 		super();

// 		this.state = {
// 			  displayMenu: false,
// 			};

// 		 this.showDropdownMenu = this.showDropdownMenu.bind(this);
// 		 this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

// 	   };

// 	   showDropdownMenu(event) {
// 		   event.preventDefault();
// 		   this.setState({ displayMenu: true }, () => {
// 		   document.addEventListener('click', this.hideDropdownMenu);
// 		   });
// 		 }

// 		 hideDropdownMenu() {
// 		   this.setState({ displayMenu: false }, () => {
// 			 document.removeEventListener('click', this.hideDropdownMenu);
// 		   });

// 		 }

// 		 render() {
// 		   return (
// 				<div className="dropdown">
// 				<div class="float-right">
// 				<div className="button" onClick={this.showDropdownMenu}> ☰ </div>

// 				{ this.state.displayMenu ? (
// 					<ul>
// 						<li><a className="active" href="#AllTitles">All Titles</a></li>
// 						<li><a className="active" href="AllActors">All Actors</a></li>
// 						<li><a className="active" href="#AllNeighborhoods">All Neighborhoods</a></li>
// 					</ul>
// 			   ):(null)}
// 			   </div>
// 			  </div>


// 		   );
// 		 }
// 	   }

// export default Menu;