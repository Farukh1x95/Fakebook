import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Database } from "../../api/database";
import ListItem from "./Listitem";

const List = () => {
  const comments = useTracker(() =>
    Database.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div className="list-group  d-flex justify-content-center">
      {comments.map(comment => (
        <ListItem key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
export default List;
