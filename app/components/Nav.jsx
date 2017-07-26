import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {

    render(){
        return (
              <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                         <li className="menu-text">React Timer App</li>
                        <li>
                            <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Timer</NavLink>
                        </li>
                        <li>
                             <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Countdown</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                     <ul className="menu">
                          <li className="menu-text">Created by Eric Nielsen</li>
                     </ul>
                </div>
            </div>
            );
    }
}

export default Nav;