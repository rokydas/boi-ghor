import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import BookDetails from "./components/Books/BookDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/book/:id">
            <BookDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
