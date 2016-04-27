import path from 'path'
import Express from 'express'
import qs from 'qs'


import createLocation from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

import React from 'react';
import {renderToString} from 'react-dom/server';

import ServerReact from '../components/serverReact';
import Error404 from '../components/error404';
import App from '../containers/App';
import routes from '../containers/routers'




const app = Express();
const port = 3020;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.use(handleRender)

function handleRender(req, res) {

    const location = createLocation(req.url);
    console.log('req.url:', req.url);
    console.log('locations:', location);

    match({ routes, location }, (err, redirectLocation, renderProps) => {

        console.log('err', err);
        console.log('redirectLocation', redirectLocation);
        console.log('renderProps', renderProps);

        const html = renderToString(
            <RoutingContext {...renderProps} />
        )
        res.send(renderFullPage(html))
    })

}

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="container">${html}</div>
        <script>
        </script>
        <script src="/static/javascript6/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
    if (error) {
        console.log('u get an error !');
    } else {
        console.log(`listening on port: ${port}...`)
    }
});