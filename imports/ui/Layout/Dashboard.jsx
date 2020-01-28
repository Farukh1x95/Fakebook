import React, { Fragment } from "react";
import List from "../Components/List";
import AddComment from "../Components/AddComment";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <AddComment />
      <List />
    </Fragment>
  );
};

export default Dashboard;
