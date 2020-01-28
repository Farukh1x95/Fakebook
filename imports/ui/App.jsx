import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import Dashboard from "./Layout/Dashboard";
import NotFound from "./Layout/NotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
