import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import UsersProfile from './pages/UsersProfile';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/posts" component={Posts} />
          <PrivateRoute path="/create-post" component={CreatePost} />
          <PrivateRoute path="/users/:userId" component={UsersProfile} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
