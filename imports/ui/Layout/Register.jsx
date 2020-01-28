import React, { useState } from "react";
import { Session } from "meteor/session";
import { useHistory, Redirect } from "react-router-dom";
import Alert from "../Components/Alert";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrormsg] = useState("");
  const history = useHistory();
  const currentUser = Meteor.userId();

  const onSubmit = e => {
    e.preventDefault();
    if (name !== "" || email !== "" || password == "") {
      Accounts.createUser(
        {
          name,
          email,
          password
        },
        error => {
          if (error.reason) {
            console.log(error.reason);
            setName("");
            setEmail("");
            setPassword("");
            setErrormsg(error.reason);
            setTimeout(() => setErrormsg(""), 2500);
          } else {
            return <Redirect to="/dashboard" />;
          }
        }
      );
    } else {
      setErrormsg("Please Filled the Form !");
      setTimeout(() => setErrormsg(""), 2500);
    }
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="container col-md-6">
        <form className="register" onSubmit={onSubmit}>
          <h1 className="h3 my-3 text-center font-weight-normal">
            Register A New User
          </h1>
          {errorMsg && <Alert error={errorMsg} />}
          <label htmlFor="inputName" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            name="name"
            value={name}
            className="form-control my-2"
            placeholder="Enter Your Name"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control my-2"
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="registerPage" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control my-3 "
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
        </form>
        <div className="d-flex justify-content-center m-3">
          <Link to="/Login">Already have an Account ?</Link>
        </div>
      </div>
    );
  }
};
export default Register;
