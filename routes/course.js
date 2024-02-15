var express = require('express');
const { course, course_find, course_update, course_delete, course_view } = require('../controller/coursecontroller');
var router = express.Router();

/* GET home page. */
router.post('/',course);
router.get('/view_course',course_find);
router.get('/views',course_view);
router.post('/update_course/:id',course_update);
router.post('/delete_course/:id',course_delete);

module.exports = router;