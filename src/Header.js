import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './header.css';
import Logout from "./Logout"
import LoginButton from "./LoginButton"
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>My Favorite Books</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
              <Nav.Link>{
                isAuthenticated ?
                  <Logout />
                  :
                  <LoginButton />
              }</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}
export default withAuth0(Header);