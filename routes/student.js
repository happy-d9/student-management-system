var express = require('express');
const { add, deletes, view, update, login, logout, find } = require('../controller/studentcontroller');
var router = express.Router();

router.post('/add',add);
router.get('/login',login);
router.get('/logout',logout);
router.get('/delete/:id',deletes);
router.get('/view',view);
router.get('/view_detail/:id',find);
router.post('/update/:id',update);

module.exports = router;