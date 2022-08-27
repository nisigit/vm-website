import React from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import heroImage from './hero_img_small.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Hero = () => {
    return (
        <>
            <section className="hero-container">
                <div className="hero-content">
                    <div className="hero-row">
                        <h1 className="hero-head">Venus &amp; Mars </h1>
                        <p className="hero-par">
                            The app that matches you based on your lifestyle.
                        </p>
                        <div>
                            <NavLink className="learn-more" to="/about">Learn More <ArrowRightAltIcon className="material-icon-hero" /></NavLink>
                        </div>
                    </div>
                    <div className="hero-row">
                        <div className="hero-img-container">
                            <img className="hero-img" src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;