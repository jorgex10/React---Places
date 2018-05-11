import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Title from '../components/Title';

export default class Login extends React.Component {
	
	render() {
		return(
			<div className="row middle-xs">
				<div className="col-xs-12 col-md-6">
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
					<div className="Login-actions">
						<RaisedButton label="Ingresar" secondary={true} />
					</div>
				</div>
				<div className="col-xs-12 col-md-6">
					<div className="Login-background" style={{"backgroundImage": "url(" + process.env.PUBLIC_URL + '/images/background-login.jpeg' + ")"}}></div>
				</div>
			</div>
		)
	}

}