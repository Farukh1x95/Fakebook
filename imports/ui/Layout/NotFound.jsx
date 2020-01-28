import React from "react";
import { Meteor } from "meteor/meteor";
import { useCurrentUser } from "react-meteor-hooks";

const NotFound = () => {
  const currentUser = useCurrentUser();

  return (
    <div>
      {currentUser ? (
        <p>
          {Meteor.userId()} - {Meteor.user().emails[0].address}
        </p>
      ) : (
        <p>You are not logged in.</p>
      )}
      {console.log(currentUser)}
    </div>
  );
};

export default NotFound;
