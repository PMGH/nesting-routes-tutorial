import React, { Component } from 'react';
import {
BrowserRouter as Router,
Link,
Route
} from 'react-router-dom';
import Home from './routes/home';
import Topics from './routes/topics';

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul style={{width: 1000, margin: '0 auto'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

export default NavBar;
