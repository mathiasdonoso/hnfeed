const csrf = require('csurf')
const router = require('express').Router();
const controller = require('./controller');

const csrfMiddleware = csrf({ cookie: true });

router.get('/', csrfMiddleware, controller.index);
router.post('/:id', csrfMiddleware, controller.destroy);

module.exports = router;
