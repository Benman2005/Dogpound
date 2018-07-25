import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage'
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/buy" component={BuyerPage} />
            <Route exact path="/sell" component={SellerPage} />
            <Route exact path="/createUser" component={createUser} />
            <Route exact path="/matches" component={MatchesContainer} />
          </main> 
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
