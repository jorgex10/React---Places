import React from 'react';
import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';
	
const userSignedIn = false

export default class Router extends React.Component {

	signedInRoutes() {
		if(userSignedIn) {
			return(
				<Route exact path="/new" render={() => <h1>Bienvenido</h1>} />
			);
		}
	}

	home() {
		if(userSignedIn) return Dashboard
		return Home;
	}

	render() {
		return(
			<ReactRouter>
				<App>
					<Switch>
	          <Route exact path="/" component={this.home()} />
	          <Route exact path="/places/:slug" component={Place} />
	          <Route exact path="/login" component={Login} />
	          <Route exact path="/signup" component={Login} />
	          {this.signedInRoutes()}
					</Switch>
				</App>
			</ReactRouter>
		)
	}

}