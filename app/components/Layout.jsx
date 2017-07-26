import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import Nav from 'Nav';

class Layout extends Component {
    render() {
         return(
            <div>
                  <Nav/>
                    <div className="row">
                         <div className="columns medium-6 large-4 small-centered">
                              <p>Layout Rendered</p>
                              {this.props.children}
                        </div>
                    </div>
            </div>
            );
    }
}

export default Layout;