var express = require('express');
const { content, content_delete, content_update, content_view, content_views } = require('../controller/contentcotroller');
var router = express.Router();

router.post('/add',content);
router.get('/delete/:id',content_delete);
router.get('/views',content_views);
router.get('/view',content_view);
router.post('/update/:id',content_update);

module.exports = router;
