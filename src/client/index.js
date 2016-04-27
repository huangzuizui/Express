import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from '../containers/routers'

ReactDOM.render(
        <Router children={routes} history={hashHistory} />,
    document.getElementById('container')
);