import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BuyerPage from './components/BuyerPage'
import SellerPage from './components/SellerPage'
import createUser from './components/createUser'
import MatchesContainer from './components/MatchesContainer'
import UserDetailsContainer from './components/UserDetailsContainer'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header"><Link to="/"><h1>DOGPOUND</h1></Link></header>


        <div> 
          <main>
            <Route exact path="/buy" component={BuyerPage} />
            <Route exact path="/sell" component={SellerPage} />
            <Route exact path="/" component={createUser} />
            <Route exact path="/matches" component={MatchesContainer} />
            <Route exact path="/users/:user" component={UserDetailsContainer} />

          </main> 
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
