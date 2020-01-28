import React from "react";
import { Meteor } from "meteor/meteor";

const ListItem = ({ comment }) => {
  const onDelete = () => {
    console.log(_id);
    Meteor.call("comment.delete", _id);
  };

  const { _id, name, email, message, createdBy } = comment;
  return (
    <div className="list-group-item list-group-item-action flex-column">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{name}</h5>
      </div>
      <p className="mb-1">
        <b>{message}</b>
      </p>
      <div className="row d-flex justify-content-between">
        <div>
          <small>By - {email}</small>
        </div>
        <div>
          {" "}
          {createdBy === Meteor.userId() && (
            <small className="btn btn-outline-danger btn-sm text-right">
              <i className="fa fa-trash-alt " onClick={() => onDelete(_id)}>
                Delete
              </i>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};
export default ListItem;
