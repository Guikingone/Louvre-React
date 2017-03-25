import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Mentions légales</li>
                </ul>
            </nav>
        );
    }
}