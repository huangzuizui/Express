var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
    fetch('http://localhost:8000/appData/maintenanceIntroData.json').then((res) => res.json()).then(data => {
        console.log('fetching data...')
        console.log(data)
        //res.send('respond with a resource :' + JSON.stringify(data));
        res.render('users', {data: data})
    })
});

module.exports = router;
