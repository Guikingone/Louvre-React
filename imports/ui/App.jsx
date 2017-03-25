import React, { Component } from 'react';

// UI
import Navbar from "./Navbar";
import Footer from "./Footer";

// Logic
import Form from "../logic/StartForm";

export default class App extends Component {
    render() {
        return (
            <div>
                <Form/>
                <p>Hello World from react !</p>
            </div>
        );
    }
}