import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './login.css';
import LoginButton from "./LoginButton"

class Login extends React.Component {
  render() {
    return (
      <>
        <Card className="text-center">
          <Card.Header>Log In</Card.Header>
          <Card.Body>
            <Card.Title>Click Below to Log In</Card.Title>
            {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
            <LoginButton />
          </Card.Body>
          
        </Card>
      </>
    )
  }
}

export default Login;
