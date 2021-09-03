import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = false; //useSelector(state => state.currentuser.logged)
  return (
    <Route
      {...rest}
      render={(props) =>
        login ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <PrivateRoute path="/posts" component={Posts} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
