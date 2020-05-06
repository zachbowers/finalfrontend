import React from 'react';
import './App.css';
import chatApp from './components/ChatApp.js';
import Auth from './components/auth.js';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/stores.js';

function App() {
  return (
      <div className="siteNav">
        <Provider store={store}>
          <HashRouter>
            <div className="NavBar">

              <Route exact path="/" render={() => <chatApp />} />
              <Route exact path="/signin" render={() => <Auth />} />
            </div>
          </HashRouter>
        </Provider>
      </div>
  )
}
export default App;