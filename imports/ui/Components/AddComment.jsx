import React, { useState, Fragment } from "react";
import { Meteor } from "meteor/meteor";

const AddComment = () => {
  const [message, setMessage] = useState("");
  const createdBy = Meteor.userId();
  console.log(createdBy);
  const onSubmit = e => {
    e.preventDefault();
    const data = {
      email: Meteor.user().emails[0].address,
      message,
      createdBy,
      createdAt: new Date()
    };
    console.log(data);
    Meteor.call("comment.insert", data);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group my-4 ">
          <input
            type="text"
            className="form-control"
            name="AddFeed"
            value={message}
            placeholder="Enter Your message"
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </form>
    </Fragment>
  );
};
export default AddComment;
