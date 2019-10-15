import React, { Component } from 'react'
import BrentSvg from '../../assets/Brent.svg';
import axios from 'axios';
import { Redirect } from 'react-router';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import setAuthToken from '../../utils/setAuthToken';

interface IState {
  email: string;
  password: string;
  errors: any;
}

interface IProps extends RouteComponentProps<any> {

}

class Login extends Component<IProps,IState> {
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: '',
      errors: {}
    }
    
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    axios.post('users/login', { email, password })
      .then((res) => {
        // TODO: change method of token storage
        localStorage.setItem("authToken", res.data.token)
        setAuthToken(res.data.token);
        // redirect after login
        this.props.history.push('/admin')
      })
      .catch(err => this.setState({
        errors: err.response.data
      }))
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-wrapper">
          <div className="image-wrapper">
            <h1>Login</h1>
          </div>
          <div className="form-wrapper">

            <img src={BrentSvg} />

            <label>
              E-mail:<br/>
              <input name="email" type="email" onChange={this.handlechange}/>
              {
                this.state.errors.email ?
                  <div className="error-msg">{ this.state.errors.email }</div>
                  : null
              }
            </label>
            <label>
              Password:<br/>
              <input name="password" type="password" onChange={this.handlechange}/>
              {
                this.state.errors.password ? 
                  <div className="error-msg">{ this.state.errors.password }</div>
                  : null
              }
            </label>

            <button type="submit" onClick={this.handleSubmit} className="login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)