import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { DotLoader } from 'react-spinners';
import Spinner from './components/atoms/Spinner';
import HomePage from './components/pages/HomePage';
import BreederPage from './components/pages/BreederPage';
import BreederDetailPage from './components/pages/BreederDetailPage';
import PuppyPage from './components/pages/PuppyPage';
import PuppyDetailPage from './components/pages/PuppyDetailPage';
import AdminPage from './components/pages/AdminPage';
import SupportPage from './components/pages/SupportPage'
// import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Error from './components/atoms/Error';
import store from './store';
import './App.scss';

class App extends Component {

  state = {
    authed: false,
    loading: true,
  }

  componentDidMount() {
   this.setState({
     loading: false,
   })
  }

  componentWillUnmount() {
    this.removeListner();
  }

  render() {
    return this.state.loading === true ? 
      <Spinner loading={this.state.loading} />
    : (
      <Provider store={store}>
        <Router>
          <div style={{ height: '100%', width: '100%' }}>
            <Switch>
              <Route exact path="/" authed={this.state.authed} component={HomePage} />

              <Route exact path="/breeders" component={BreederPage} />
              <Route path="/breeders/:id" component={BreederDetailPage} />

              <Route exact path="/puppies" component={PuppyPage} />
              <Route path="/puppies/:id" component={PuppyDetailPage} />

              <Route path="/admin" component={AdminPage} />
              <Route path="/support" component={SupportPage} />
              <Route render={() => <Error /> } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;