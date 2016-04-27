import React from 'react';
import {Link} from 'react-router';

const Nav = function (props) {
    return (
        <nav id="p-nav">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/news">news</Link></li>
                <li><Link to="/newsId?id=123">newsid</Link></li>
                <li><Link to={{pathname: '/newsId', query: {id: 345}}}>newsid2</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;