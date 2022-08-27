import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Safety = () => {
    return (
        <>
            <Navbar />
            <section className="container">
                <h1 className="main-head">Safety</h1>
                <div className="page-content">
                    <div className="info-div">
                        <p className="info-div-par">
                            Safety has long been established as a concern from dating apps ever since their conception. The idea of meeting a stranger from an online app rather than an individual through friends or your network seems daunting, especially to many dating app users.
                        </p>
                        <p className="info-div-par">
                            Therefore to help encourage Non dating users onto our platform and push safety conscious users of other apps to try us we will implement a two-pronged solution. Anti-catfishing user verification during the onboarding process and an emergency contact alert button to send an alert during a date to a trusted friend or family member to make sure our community only has authentic users and is safe for all our users to go on dates using the platform.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Safety;