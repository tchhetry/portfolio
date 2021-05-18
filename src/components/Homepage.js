import React from 'react';
import NavTop from './NavTop.js';
import bitmoji from '../images/bitmoji_laptop.png';
import Typist from 'react-typist';

export default function Homepage(){

    return (
        <>
            <NavTop current="Homepage"/>
            <div className="content">
                <img className="bitmoji" src={bitmoji} alt="logo"/>
                <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>
                        Hi, I'm Trishant!
                </Typist>
            </div>
        </>
    )
    
}
