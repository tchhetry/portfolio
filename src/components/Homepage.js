import React from 'react';
import NavTop from './NavTop.js';
import bitmoji from '../images/bitmoji_laptop.png';
import Typist from 'react-typist';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Homepage(){

    return (
        <>
            <NavTop current="Homepage"/>
            <div className="content">
                <img className="bitmoji" src={bitmoji} alt="logo"/>
                <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>
                        Hi, I'm Trishant!
                </Typist>
                <div className="banner">
                <p>Aspiring Software Engineer</p>
                <h2>JavaScript/React | Python | Java</h2>
                    <div className="socials">
                        <a href="https://github.com/tchhetry"><AiFillGithub size="100px" /></a> 
                        <a href="https://www.linkedin.com/in/trishant-chhetry-48300415b/"><AiFillLinkedin size="100px" /></a>
                    </div>
                </div>
            </div>
        </>
    )
    
}
