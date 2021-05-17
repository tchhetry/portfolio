import React, { Component } from 'react';
import NavTop from './NavTop.js';

export class Contact extends Component {
    render() {
        return (
            <div>
                <NavTop current="Contact"/>
                <div className="content">
                    <p>Contact</p>
                </div>
            </div>
        )
    }
}

export default Contact