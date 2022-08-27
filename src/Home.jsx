import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


const HomeParagraph = "At Venus and Mars, we want to shift the online dating industry towards a more sustainable connection building system, encouraging deeper and safer relationships. By partnering with local businesses, we aim to provide safe and inclusive environments for our users to meet while also supporting local venues to get back on their feet!";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <section className="container">
                <h1 id="vision" className="main-head">Our Vision</h1>
                <div id="homeParagraphDiv" className="info-div">
                    <p className="home-info-par">
                        {HomeParagraph}
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;