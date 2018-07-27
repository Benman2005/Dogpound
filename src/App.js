import React, { Component } from 'react';
import './App.css';
import './main.css'
import './util.css'
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "./vendor/animate/animate.css"
import "./vendor/css-hamburgers/hamburgers.min.css"
import "./vendor/animsition/css/animsition.min.css"
import "./vendor/select2/select2.min.css"
import "./vendor/daterangepicker/daterangepicker.css"
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
