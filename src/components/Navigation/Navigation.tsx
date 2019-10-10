import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainWrapper } from '../MainWrapper/MainWrapper'
import Home from '../../pages/Home'
import BrentPng from '../../assets/Brent.png'
import BrentSvg from '../../assets/Brent.svg'
import Skills from '../../pages/Skills';
import Contact from '../../pages/Contact';
import Login from '../../pages/admin/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../../pages/admin/Dashboard';
import WorkDashboard from '../../pages/admin/work/WorkDashboard';
import SkillsDashboard from '../../pages/admin/skills/SkillsDashboard';
import UpdateSkills from '../../pages/admin/skills/UpdateSkills';
import UpdateWork from '../../pages/admin/work/UpdateWork';

export const Navigation = () => {
  const logoutUser = () => {
    localStorage.removeItem('authToken');
  }
  return(
    <Router>
      <nav>
          <ul className="main-nav">
            <li><Link to="/" className="logo" ><img src={BrentPng} alt="Logo"/></Link></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {
              localStorage.getItem('authToken') ?
                <li><button onClick={logoutUser}><i className="fa fa-sign-out"/></button></li>
                : null
            }
          </ul>
      </nav>

      <a id="menu-toggle" href="#" className="button">
          <span className="sr">Toggle Navigation</span>
          <span className="menu-bar bar1"></span>
          <span className="menu-bar bar2"></span>
          <span className="menu-bar bar3"></span>
      </a>

      <div className="mobile-menu">
        <div>
            <Link to="/">
                <img src={BrentSvg} alt="Brent Logo" />
            </Link>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
        <MainWrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login" >
                <Login />
              </Route>
              <PrivateRoute exact path="/admin">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/admin/work">
                <WorkDashboard />
              </PrivateRoute>
              <PrivateRoute path="/admin/work/:id">
                <UpdateWork />
              </PrivateRoute>
              <PrivateRoute exact path="/admin/skills">
                <SkillsDashboard />
              </PrivateRoute>
              <PrivateRoute path="/admin/skills/:id">
                <UpdateSkills />
              </PrivateRoute>
            </Switch>
        </MainWrapper>
    </Router>
  )
}