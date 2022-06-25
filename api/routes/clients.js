var express = require('express');
var router = express.Router();
var clientController = require('../controller/clients')

/* GET users listing. */
router.post('/registerEmail', clientController.storeClient);
router.post('/register',clientController.register);
router.post('/login',clientController.login)

module.exports = router;
