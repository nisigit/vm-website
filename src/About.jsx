import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './Pages.css';
import AboutRows from './AboutRows';


const About = () => {
    return (
        <>
            <Navbar />
            <section className="about-container">
                <section className="page-content">
                    <h1 className="main-head">About Us</h1>

                    <p className="premium-features">
                        We are committed to providing a sustainable alternative to serial-dating apps. Our goal is to offer our users a new and safe dating environment, allowing them to benefit from deeper and more meaningful connections while also giving back to the local community. We do so through our 3 key features:
                    </p>
                    <AboutRows />
                    <h1 className="main-head">Premium Features</h1>
                    <div className="info-div">
                        <p className="premium-features">
                            The   potential   premium   features   for   our   app   are   listed   below   with additions/subtractions possible in future updates based on market response at launch. These premium purchases will be optional and sold to users who want to subscribe to them.
                            <ol className="premium-features-list">
                                <li>Boost up the line which will make your profile one of the first to be viewed in your area within the area(s) of interest you have signed up for.</li>
                                <li>The ability to like as many profiles in a day within the areas of interest.</li>
                                <li>The ability to like and message a user rather than just liking and waiting for them to like you back in order to message.</li>
                                <li>The ability to see which profiles already liked your profile.</li>
                                <li>Accessing  a  premium  tier  of  either  high  end  or  extremely  popular  venues  for discounts.</li>
                                <li>Accessing discounts at pre-date partners such as Hair saloons, barbershops, nail places, local clothing and perfume stores.</li>
                            </ol>
                        </p>
                    </div>

                </section>
            </section>
            <Footer />
        </>
    );
};

export default About;