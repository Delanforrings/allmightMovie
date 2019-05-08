import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Animation} from 'mdbreact';
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Characters from "./pages/Characters";
import Deku from "./pages/Deku";
import Bokugo from "./pages/Bokugo";
import Shoto from "./pages/Shoto";
import Uraraka from "./pages/Uraraka";

function App() {
  return (
      <Router>
          <div>
              <Animation type="fadeIn">
                  <Route exact path="/" component={Home} />
                  <Route path="/MyHeroAcademia" component={Landing} />
                  <Route path="/Characters" component={Characters} />
                  <Route path="/Deku" component={Deku} />
                  <Route path="/Bokugo" component={Bokugo} />
                  <Route path="/Shoto" component={Shoto} />
                  <Route path="/Uraraka" component={Uraraka} />

              </Animation>
          </div>
      </Router>
  );
}

export default App;
