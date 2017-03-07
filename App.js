import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';

//the routes
import Home from './routes/Home.js';


//the main styling file
import mainStyle from './styles/main.sass';

injectTapEventPlugin();
class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

render(<App/>, document.getElementById('app'));
