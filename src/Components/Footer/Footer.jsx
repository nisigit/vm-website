import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from './VectorVNMLogo.png';
import FooterItems from './FooterItems';

const Footer = () => {
    return (
        <>
            <section className="footer-container">
                <div className="footer-content">
                    <div className="footer-list">
                        <div className="footer-img-container">
                            <NavLink
                                to="/"
                            >
                                <img src={logo} className="footer-logo-img" alt="footer logo" />
                            </NavLink>
                        </div>
                        <div className="footer-list-links">
                            {FooterItems.FooterListLinks.map((link) => {
                                return (
                                    <NavLink
                                        key={link.id}
                                        to={link.to}
                                        className={link.cName}
                                    >
                                        {link.text}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="footer-main-links">
                            {FooterItems.FooterMainLinks.map((link) => {
                                return (
                                    <NavLink
                                        key={link.id}
                                        to={link.to}
                                        className={link.cName}
                                    >
                                        {link.text}
                                    </NavLink>
                                );
                            })}
                        </div>
                        <div className="footer-main-social">
                            {FooterItems.SocialMediaItems.map((socialLink) => {
                                return (
                                    <a
                                        key={socialLink.id}
                                        className={socialLink.cName}
                                        href={socialLink.url}
                                    >
                                        {socialLink.icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <span className="copy">&copy; 2021 Venus &amp; Mars</span>
                </div>
            </section>
        </>
    );
};

export default Footer;
