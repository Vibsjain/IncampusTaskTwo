import './App.css';
import { Component } from 'react';
import { Provider } from "react-redux"
import Store from "./store";
import Front from './frontpage'
import GetPhoto from './photobyid'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Albums from './albums';
import Photobyalbum from './photobyalbum';

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
      <Router>
      <Switch>
      <Route exact path="/" component={Front} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/:id" component={GetPhoto} />
      <Route exact path="/album/:id" component={Photobyalbum} />
      </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
