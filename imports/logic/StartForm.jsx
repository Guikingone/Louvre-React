import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default class StartForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: ''
        };
    }
    handleSubmit(event) {
        event.preventDefault();

    }
    startOrder() {
        // Start the order
        Session.set({

        });
    }
    render() {
        return (
            <div>
                <Navbar/>
                {
                    this.state.errors
                    ? <p>{this.state.errors}</p>
                    : undefined
                }
                <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            Nom :
                            <input type="text" name="lastname" ref="lastnameInput" />
                        </label>
                        <label>
                            Prénom :
                            <input type="text" name="firstname" ref="firstNameInput" />
                        </label>
                        <label>
                            Email :
                            <input type="email" name="email" ref="emailInput" />
                        </label>
                        <label>
                            Date d'entrée :
                            <input type="date" name="email" ref="dateInput" />
                        </label>
                        <label>
                            Code de réduction :
                            <input type="text" name="reduction" ref="reductionInput" />
                        </label>
                    </form>
                    <button onClick={this.startOrder}><Link to="/tickets">Commencer la commande</Link></button>
                <Footer/>
            </div>
        )
    }
}