import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Figure from 'react-bootstrap/Figure'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt={user.name}
        src={user.picture}
      />
      <Figure.Caption>
      <h2>{user.name}</h2>
      </Figure.Caption>
      <Figure.Caption>
      {user.email}
      </Figure.Caption>
    </Figure>
    </>
    )
  );
};

export default Profile;