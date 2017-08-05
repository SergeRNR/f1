import React from 'react';
import NavLink from '../components/NavLink';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/drivers">Drivers</NavLink></li>
                    <li><NavLink to="/circuits">Circuits</NavLink></li>
                    <li><NavLink to="/constructors">Constructors</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
