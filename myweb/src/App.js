import React, { Component } from 'react';
import './App.css';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Login from './components/login';
import SignUp from './components/signUp';
import Dash from './components/Dash';
import CounterPage from './components/Counter';
import ShowData from './components/showdata';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <NavLink to="/"><div className="navbar-brand">TESA 2018</div></NavLink>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="active"><NavLink to="/">Home</NavLink></li>
                  <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Temp</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Light</MenuItem>
                  </NavDropdown>
                  <li><NavLink to="/dash">Dashboard</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/counter">Counter</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/signin"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
                  <li><NavLink to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
            {
              /* Commentt
              */
            }
          <div>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/about"  component={About} />
              <Route path="/signin" component={SignUp} />
              <Route path="/login"  component={Login} />
              <Route path="/dashS"  component={Dash} />
              <Route path="/Counter" component={CounterPage} />
              <Route path="/showdata" component={ShowData} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
