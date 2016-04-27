var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const React = require('react');
//import reactAbout from '../src/components/about';
import ServerReact from  '../src/components/serverReact';

var ReactApp = React.createFactory(ServerReact);

/* GET users listing. */
router.get('/', function(req, res, next) {

    const html = React.renderToString(ReactApp({name: 'zuizui'}));
    console.log(html);


    res.render('react', {html: html})
});

module.exports = router;
