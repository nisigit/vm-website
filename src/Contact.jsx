import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts';

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="container">
                <section className="page-content">
                    <h1 className="main-head">Contact</h1>
                    <span className="main-head-follow">Got something you want to talk about? Contact us or email us and we promise to get back to you as soon as we can.</span>

                    {Contacts.map(contact => {
                        return (
                            <div
                                key={contact.id}
                                className="info-div">
                                <h2 className="info-div-head">{contact.head}</h2>
                                <h3 className="info-div-subhead">{contact.paragraph} <a href={"mailto:" + contact.email}>{contact.email}</a></h3>
                            </div>
                        );
                    })}

                </section>
            </section>
            <Footer />
        </>
    );
};

export default Contact;