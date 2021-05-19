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
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/log-in">
            <LogIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/update-profile">
            <UpdateProfile />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
