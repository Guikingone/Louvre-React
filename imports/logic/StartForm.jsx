import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default class StartForm extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const lastname = ReactDOM.findDOMNode(this.refs.lastnameInput).value.trim();
        const firstname = ReactDOM.findDOMNode(this.refs.firstnameInput).value.trim();
        const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
        const date = ReactDOM.findDOMNode(this.refs.dateInput).value.trim();
        const reduction = ReactDOM.findDOMNode(this.refs.reductionInput).value.trim();

        if (lastname && firstname && email && date) {
            event.target.lastname.value = '';
            // Store the entire form into the session.
            Session.set({
                "Order" : {
                    "lastname": lastname,
                    "firstname": firstname,
                    "email": email,
                    "date": date,
                    "reduction": reduction,
                }
            });
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
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
                    <button type="submit"><Link to="/tickets">Commencer la commande</Link></button>
                <Footer/>
            </div>
        )
    }
}