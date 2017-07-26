import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import components to render

import Home from 'Home';
import Layout from 'Layout';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// load app.scss
require('style-loader!css-loader!sass-loader!appSCSS');
$(document).foundation();

class App extends Component {
  render() {
    return(
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      );
  }
}

ReactDOM.render(<App/>,
        document.getElementById('app')
        );