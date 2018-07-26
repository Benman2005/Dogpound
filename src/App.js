import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BuyerPage from './components/BuyerPage'
import SellerPage from './components/SellerPage'
import createUser from './components/createUser'
import MatchesContainer from './components/MatchesContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header"></header>


        <div> 
          <main>
            <Route exact path="/buy" component={BuyerPage} />
            <Route exact path="/sell" component={SellerPage} />
            <Route exact path="/" component={createUser} />
            <Route exact path="/matches" component={MatchesContainer} />
          </main> 
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
