const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/:id', controller.destroy);

module.exports = router;
