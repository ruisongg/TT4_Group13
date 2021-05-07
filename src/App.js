import React from 'react';
import './App.css';
import Login from "./pages/login.js";
import Nav from "./nav/nav.js";
import {BrowserRouter, Route} from 'react-router-dom';
import BalancePage from './pages/BalancePage';
import TransferPage from './pages/TransferPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <main className="form-signin">
          <Route path="/" exact component={Login}/>
          <Route path="/balance" exact component={BalancePage}/>
          <Route path="/transfer" exact component={TransferPage}/>
          <Route path="/history" exact component={HistoryPage}/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
