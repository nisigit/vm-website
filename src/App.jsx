import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import FAQ from './FAQ';
import Safety from './Safety';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top for every new page.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/safety" component={Safety} />
            </Switch>
        </>
    );
};

export default App;