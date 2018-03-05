var router = require('express').Router();
var UserController = require('./users.controller');


//POST route for updating data
router.post('/', function (req, res, next) {
    UserController.updateUser(req, res, next);
});

// GET route after registering
router.get('/profile', function (req, res, next) {
    UserController.getProfile(req, res);
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
    UserController.logout(req, res, next);
});

module.exports = router;