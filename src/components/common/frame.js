import React from 'react';

import Nav from './nav';
import Header from './header';
import Footer from './footer';

const Frame = function (props) {
    return (
        <div>
            <Header />
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}
export default Frame;