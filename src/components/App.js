import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import LandingPage from '../containers/LandingPage';
import RouteDetails from './RouteDetails';
import Header from './Header';
import Footer from './Footer';



// this is the app component that ties together all other components
// using react router to switch between routes (landing page and details page)
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div id="main-wrapper">
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/route/:id" component={RouteDetails} />
                <Route render={() => <h3 className="title is-3 error-message">Not found</h3>} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

