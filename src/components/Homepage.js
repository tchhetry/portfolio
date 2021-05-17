import React, { Component } from 'react';
import NavTop from './NavTop.js';
import bitmoji from '../images/bitmoji_laptop.png';

export default class Homepage extends Component {
    render() {
        return (
            <>
                <NavTop current="Homepage"/>
                <div className="content">
                    <img className="bitmoji" src={bitmoji} alt="logo"/>
                    <div className="banner">
                        Test
                    </div>
                </div>
            </>
        )
    }
}
