import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/home/Index'
import ShowProduct from './components/home/ShowProduct'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Reset from './components/auth/Reset'
import Chats from './components/chat/Chat'
import Notifications from './components/notifications/Home'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/notifications" component={Notifications}/>
          <Route path="/chats" component={Chats}/>
          <Route path="/" exact component={Home} />
          <Route path="/show-product" component={ShowProduct} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={Reset}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;