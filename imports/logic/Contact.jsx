import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Nom :
                        <input type="text" name="lastname" />
                    </label>
                    <label>
                        Prénom :
                        <input type="text" name="firstname" />
                    </label>
                </form>
            </div>
        );
    }
}