import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Alert from "../Components/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const history = useHistory();
  const currentUser = Meteor.userId();

  const onSubmit = e => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      Meteor.loginWithPassword(email, password, error => {
        console.log("You initiated the login process.");
        if (error) {
          console.log(error.reason);
          setEmail("");
          setPassword("");
          setErrormsg("");
          setErrormsg(error.reason);
        } else {
          history.push("/dashboard");
        }
      });
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
        <form className="login" onSubmit={onSubmit}>
          <h1 className="h3 my-3 text-center font-weight-normal">Login</h1>
          {errormsg && <Alert error={errormsg} />}
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control my-3"
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control my-3"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="btn btn-lg btn-primary btn-block my-3"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="d-flex justify-content-center m-3">
          <Link to="/register">Create your account</Link>
        </div>
      </div>
    );
  }
};

export default Login;
