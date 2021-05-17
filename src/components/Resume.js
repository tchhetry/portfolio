import React, { Component } from 'react';
import NavTop from './NavTop.js';

export class Resume extends Component {
    render() {
        return (
            <div>
                <NavTop current="Resume"/>
                <div className="content">
                    <p>Resume</p>
                </div>
            </div>
        )
    }
}

export default Resume
