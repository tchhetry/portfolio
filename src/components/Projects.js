import React, { Component } from 'react'
import NavTop from './NavTop.js';

export class Projects extends Component {
    render() {
        return (
            <>
                <NavTop current="Projects"/>
                <div className="content">
                    <p>Projects</p>
                </div>
            </>
        )
    }
}

export default Projects
