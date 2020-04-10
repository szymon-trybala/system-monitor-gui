import * as React from 'react';
import { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import './styles/burger-menu.css';

export default class App extends Component {
  public render() {
    return (
      <div id='outer-container'>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <ul>
            <li>
              <NavLink to='/' className='menu-item'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/system' className='menu-item'>
                System
              </NavLink>
            </li>
          </ul>
        </Menu>
        <main id='page-wrap'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/system' exact render={() => <p>System</p>} />
          </Switch>
        </main>
      </div>
    );
  }
}
