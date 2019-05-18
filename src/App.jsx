import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Animation} from 'mdbreact';
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Characters from "./pages/Characters";
import Deku from "./pages/Deku";
import Bokugo from "./pages/Bokugo";
import Shoto from "./pages/Shoto";
import Uraraka from "./pages/Uraraka";
import Iida from "./pages/Iida";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import {BrowserView, MobileView} from "react-device-detect";
import Home_m from "./pages/mobile/Home_m";
import Landing_m from "./pages/mobile/Landing_m";
import Characters_m from "./pages/mobile/Characters_m";
import Deku_m from "./pages/mobile/Deku_m";
import Bokugo_m from "./pages/mobile/Bokugo_m";
import Shoto_m from "./pages/mobile/Shoto_m";
import Uraraka_m from "./pages/mobile/Uraraka_m";
import Iida_m from "./pages/mobile/Iida_m";
import Media_m from "./pages/mobile/Media_m";
import Contact_m from "./pages/mobile/Contact_m";

function App() {
  return (
      <Router>

          <div>
              <Animation type="fadeIn">
                  <BrowserView>
                      <Route exact path="/" component={Home} />
                      <Route path="/MyHeroAcademia" component={Landing} />
                      <Route path="/Characters" component={Characters} />
                      <Route path="/Deku" component={Deku} />
                      <Route path="/Bokugo" component={Bokugo} />
                      <Route path="/Shoto" component={Shoto} />
                      <Route path="/Uraraka" component={Uraraka} />
                      <Route path="/Iida" component={Iida} />
                      <Route path="/Media" component={Media} />
                      <Route path="/Contact" component={Contact} />
                  </BrowserView>
                  <MobileView>
                      <Route exact path="/" component={Home_m} />
                      <Route path="/MyHeroAcademia" component={Landing_m} />
                      <Route path="/Characters" component={Characters_m} />
                      <Route path="/Deku" component={Deku_m} />
                      <Route path="/Bokugo" component={Bokugo_m} />
                      <Route path="/Shoto" component={Shoto_m} />
                      <Route path="/Uraraka" component={Uraraka_m} />
                      <Route path="/Iida" component={Iida_m} />
                      <Route path="/Media" component={Media_m} />
                      <Route path="/Contact" component={Contact_m} />
                  </MobileView>

              </Animation>
          </div>
      </Router>
  );
}

export default App;
