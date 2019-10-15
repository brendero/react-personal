import React, { Component } from 'react'
import BrentSvg from '../../assets/Brent.svg';
import axios from 'axios';
import { Redirect } from 'react-router';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IState {
  email: string;
  password: string;
}

interface IProps extends RouteComponentProps<any> {

}

class Login extends Component<IProps,IState> {
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: ''
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
    // TODO: change access token storage  
    axios.post('users/login', { email, password })
      .then((res) => {
        localStorage.setItem("authToken", res.data.token)
        // redirect after login
        this.props.history.push('/admin')
      })
      .catch(err => console.log(err))
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
            </label>
            <label>
              Password:<br/>
              <input name="password" type="password" onChange={this.handlechange}/>
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