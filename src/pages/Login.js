import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
	Link,
	Route
} from 'react-router-dom'

import Title from '../components/Title';
import Container from '../components/Container';

export default class Login extends React.Component {
	
	render() {
		return(
			<div className="row middle-xs">
				<div className="col-xs-12 col-md-6">
					<Container>
						<Title />
						<TextField
							floatingLabelText="Correo electrónico"
							type="email"
							className="textfield"
						/>
						<TextField
							floatingLabelText="Contraseña"
							type="password"
							className="textfield"
						/>
							<div>
								<Route exact path="/login" render={() => {
									return(
										<div>
											<Link to="/signup" style={{"marginRight":"1em"}}>Crear nueva cuenta</Link>
											<RaisedButton label="Ingresar" secondary={true} />
										</div>
									);
								}} />
								<Route exact path="/signup" render={() => {
									return(
										<div>
											<Link to="/login" style={{"marginRight":"1em"}}>Ya tengo cuenta</Link>
											<RaisedButton label="Crear cuenta" secondary={true} />
										</div>
									);
								}} />
							</div>
					</Container>
				</div>
				<div className="col-xs-12 col-md-6">
					<div>
						<Route exact path="/login" render={() =>
							<div className="Login-background" style={{"backgroundImage": "url(" + process.env.PUBLIC_URL + '/images/background-login.jpeg' + ")"}}></div>
						} />
						<Route exact path="/signup" render={() =>
							<div className="Login-background" style={{"backgroundImage": "url(" + process.env.PUBLIC_URL + '/images/background-signup.jpeg' + ")"}}></div>
						} />
					</div>
				</div>
			</div>
		)
	}

}