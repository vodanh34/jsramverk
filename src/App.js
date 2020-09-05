import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Nav from "./view/nav.js";
import Home from "./view/home.js";
import Report from "./view/report.js";
import Week1 from "./view/reports/week1.js";

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/reports' component={Report} />
                <Route exact path='/reports/week/1' component={Week1} />
            </Switch>

        </div>
    </Router>
  );
}

export default App;
