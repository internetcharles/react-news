import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import AllArticles from '../../containers/AllArticles';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <AllArticles {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
