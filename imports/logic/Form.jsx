import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="nom" placeholder="Entrez votre nom" />
                </form>
                <button type="submit">Soumettre</button>
            </div>
        )
    }
}