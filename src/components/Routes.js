import React from 'react';
import { Route, matchPath } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './AnimatedSwitch';
import { firstChild } from '../utils/helpers';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import Missed from './Missed';

const Routes = (state) => (
	<div>
    <Route
      render={({ location }) => (
        <TransitionGroup component="main">
          <AnimatedSwitch
            key={location.key}
            location={location}
          >
            <Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
            <Route
              exact
              path="/projects"
              render={props => (
                <Projects {...props} projects={state.projects} />
              )}
            />
            <Route
              path="/projects/:id"
              render={props => (
                <ProjectItem {...props} projects={state.projects} />
              )}
            />
            <Route component={Missed} />
          </AnimatedSwitch>
        </TransitionGroup>
      )}
    />
	</div>
);

export default Routes;
