import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <a><Link to="/tarifs">Tarifs</Link></a>
                <a>Contact</a>
                <a>CGV</a>
                <a>FAQ</a>
                <p>Copyrights GuikProd - 2017</p>
            </footer>
        );
    }
}