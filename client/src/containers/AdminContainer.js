import React, { Component } from 'react';
import axios from 'axios';
import { login } from '../helpers/auth';
import Button from '../components/atoms/Button';
import Admin from '../components/organisms/Admin';
import { fetchServerConfig } from '../config';

// const setErrorMessage = (err) => {
//   return {
//     loginError: err,
//   }
// }

class HeaderContainer extends Component {

  state = {
    emai: '',
    password: '',
    isAuthentication: false,
    loginError: '',
    dogList: [],
    breederList: [],
    loading: true,
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleAuthentication = (e) => {
    const { email, password } = this.state;
    login(email, password)
      .then(() => {
        axios.get(`http://${fetchServerConfig.ip}:4000/api/admin`)
          .then((data) => {
            this.setState({
              dogList: data.data[0],
              breederList: data.data[1],
              loginError: null,
              isAuthentication: true,
              loading: false,
            })
          })
          .catch(err => console.log(err))
      })
      .catch((err) => {
        console.log(err)
        this.setState({
            loginError: err.message,
          }
        );
      });
    e.preventDefault();
  }

  render() {
    const {
      isAuthentication,
      loginError,
      email,
      password,
      dogList,
      breederList
    } = this.state;
    
    return (
      <div style={{ minHeight: '500px', paddingBottom: '50px' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input type="text" style={{ margin: '20px' }} onChange={this.handleEmailChange} value={email || ''} placeholder="email" />
          <input type="password" style={{ margin: '20px' }} onChange={this.handlePasswordChange} value={password || ''} placeholder="password" />
          {
            loginError
              ?
              <span>
                <p style={{ color: 'red' }}>{this.state.loginError}</p>
              </span>
              :
              false
          }
          <Button onClick={this.handleAuthentication} style={{ marginLeft: '20px' }}>
            로그인
          </Button>
        </div>
        {
          !isAuthentication ? false : <Admin dogList={dogList} breederList={breederList}/>
        }
      </div>
    );
  }
}

export default HeaderContainer;
