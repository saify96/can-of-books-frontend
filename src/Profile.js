import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

export class Profile extends Component {
    render() {
      let  userName= this.props.auth0.user.name;
      let  userEmail= this.props.auth0.user.email;
      let  userPicture= this.props.auth0.user.picture;
    return (
            <div>
                <h2>{userName}</h2>
                <p>{userEmail}</p>
                <img src={userPicture} alt={userName} />
            </div>
        )
    }
}
export default withAuth0(Profile)
