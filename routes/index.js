var express = require('express');
const { register, login, logout, update, delete_role, view } = require('../controller/indexcontroller');
var router = express.Router();

/* GET home page. */
router.post('/add',register);
router.post('/login',login);
router.get('/logout',logout);
router.post('/update/:id',update);
router.get('/delete/:id',delete_role);
router.get('/view',view);

module.exports = router;