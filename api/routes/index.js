var express = require('express');
var router = express.Router();
const eventsController = require("../controller/events")

/* GET home page. */
router.get('/getEvents',eventsController.getEvents);

module.exports = router;
