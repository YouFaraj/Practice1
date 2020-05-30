import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import {About} from './Components/About/About';
import {Contact} from './Components/Contact/Contact';
import {NoMatch} from './NoMatch';
import {Projects} from './Components/Projects/Projects';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route component={NoMatch} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
