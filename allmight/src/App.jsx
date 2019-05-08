import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Animation} from 'mdbreact';
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
      <Router>
          <div>
              <Animation type="fadeIn">
                  <Route exact path="/" component={Home} />
                  <Route path="/MyHeroAcademia" component={Landing} />
              </Animation>
          </div>
      </Router>
  );
}

export default App;
