import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItems from './MenuItems';
import './Navbar.css';
import logo from './VectorVNMLogo.png';

class Navbar extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar-items">
                <NavLink to="/">
                    <img id="navbarLogo" className="filter-white" src={logo} alt="" />
                </NavLink>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink activeClassName={item.cNameActive} className={item.cName} exact to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    };
};

export default Navbar