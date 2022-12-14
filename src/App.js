import './App.css';
import Header from './header';
import Card from './home';
import NewCommunity from './newCommunity';
import Community from './community';
import CreateBounty from './createBounty';
import Proposal from './proposal';
import { Route, Switch,BrowserRouter } from "react-router-dom";
import MultiActionAreaCard from './home';
import JoinBounty from './joinbounty';
import Reviews from './reviews';
import AddReview from './addreview';
import Overallreview  from './overallreview'
import Detailedreview from './detailedreview'
import Userspecificreview from './userspecificreview'


function App() {
  return (
      <div className="App">
        <Header/>
        <div className="container" style={{ marginTop:'150px' }}>
            <BrowserRouter>
          <Switch>

              <Route  exact path="/" component={MultiActionAreaCard} />
              <Route  path="/createbounty*" component={CreateBounty} />
              <Route  path="/joinbounty*" component={JoinBounty} />
              <Route  path="/reviews*" component={Reviews} />
              <Route  path="/addreview*" component={AddReview} />
              <Route  path="/overallreview*" component={Overallreview} />
              <Route  path="/detailedreview*" component={Detailedreview} />
              <Route  path="/userspecificreview*" component={Userspecificreview} />


              {/*<Route  path="/myProperties" element={<MyProperties />} />*/}
            {/*<Route  path="/myProperties/property1" element={<IndividualProperty />} />*/}
            {/*<Route  path="/myProperties/property1/status" element={<StatusScreen />} />*/}
          </Switch>
            </BrowserRouter>
        </div>
      </div>
  );
}
export default App;