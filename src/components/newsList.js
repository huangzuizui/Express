import React from 'react';
import {Link} from 'react-router';

const NewsList = function (props) {
    return (
        <div>
            <h1>newsList</h1>
            <ul>
                <li><Link to="/newsItem/1" >new item 1</Link></li>
                <li><Link to="/newsItem/2" >new item 2</Link></li>
                <li><Link to="/newsItem/3" >new item 3</Link></li>
            </ul>
        </div>
    )
}
export default NewsList;