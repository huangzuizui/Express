var React = require('react');
const ReactApp = React.createClass({

    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <h1>ServerReact111{this.props.name}</h1>
                <div>ServerReac111t</div>
            </div>
        )
    }

});

module.exports = ReactApp;