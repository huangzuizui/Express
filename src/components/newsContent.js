import React from 'react';
const NewsContent = function (props) {
    return (
        <div>
            <h1>news content</h1>
            <div>props.params id: {props.params.id}</div>
            <div>props.location.query id: {props.location.query.id}</div>
        </div>
    )
}
export default NewsContent;