import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Accordions from './Components/faq_accordion/Accordions';

const FAQ = () => {
    return (
        <>
            <Navbar />
            <section className="container">
                <h1 className="main-head">Frequently Asked Questions</h1>
                <div className="accordion-container">
                    <Accordions />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default FAQ;