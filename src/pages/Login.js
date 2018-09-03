import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Link,
  Route
} from 'react-router-dom'
import * as actions from '../actions/userActions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Title from '../components/Title';
import Container from '../components/Container';
import { login, signUp } from '../requests/auth';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  requestAuth() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }

    login(credentials).then(response => {
      console.log(response);

      this.props.dispatch(actions.login(response.jwt));
      this.props.dispatch(actions.loadUser(response.user));
      this.props.dispatch(push('/'));

    }).catch(error => {
      console.log(error);
    })

  }

  createAccount() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }

    signUp(credentials).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })

  }

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
              ref="emailField"
            />
            <TextField
              floatingLabelText="Contraseña"
              type="password"
              className="textfield"
              ref="passwordField"
            />
              <div>
                <Route exact path="/login" render={() => {
                  return(
                    <div>
                      <Link to="/signup" style={{"marginRight":"1em"}}>Crear nueva cuenta</Link>
                      <RaisedButton onClick={this.requestAuth} label="Ingresar" secondary={true} />
                    </div>
                  );
                }} />
                <Route exact path="/signup" render={() => {
                  return(
                    <div>
                      <Link to="/login" style={{"marginRight":"1em"}}>Ya tengo cuenta</Link>
                      <RaisedButton onClick={this.createAccount} label="Crear cuenta" secondary={true} />
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

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Login);