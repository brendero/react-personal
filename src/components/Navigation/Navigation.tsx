import React from 'react'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from "react-router-dom";
import { MainWrapper } from '../MainWrapper/MainWrapper';
import Home from '../../pages/Home'
import Skills from '../../pages/Skills';
import Contact from '../../pages/Contact';
import Login from '../../pages/admin/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../../pages/admin/Dashboard';
import WorkDashboard from '../../pages/admin/work/WorkDashboard';
import SkillsDashboard from '../../pages/admin/skills/SkillsDashboard';
import UpdateSkills from '../../pages/admin/skills/UpdateSkills';
import UpdateWork from '../../pages/admin/work/UpdateWork';
import NotFound from '../../pages/NotFound';
import NavigationHeader from './NavigationHeader';
import AddWork from '../../pages/admin/work/AddWork';
import AddSkill from '../../pages/admin/skills/AddSkill';

const history = createBrowserHistory()

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export const Navigation = () => {
  return(
    <Router history={history}>
        <NavigationHeader />
        <MainWrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/skills">
                <Skills />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login" >
                <Login />
              </Route>
              <PrivateRoute exact path="/admin">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute exact path="/admin/work">
                <WorkDashboard />
              </PrivateRoute>
              <PrivateRoute exact path="/admin/work/add">
                <AddWork />
              </PrivateRoute>
              <PrivateRoute path="/admin/work/:id">
                <UpdateWork />
              </PrivateRoute>
              <PrivateRoute exact path="/admin/skills">
                <SkillsDashboard />
              </PrivateRoute>
              <PrivateRoute exact path="/admin/skills/add">
                <AddSkill/>
              </PrivateRoute>
              <PrivateRoute path="/admin/skills/:id">
                <UpdateSkills />
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
        </MainWrapper>
    </Router>
  )
}