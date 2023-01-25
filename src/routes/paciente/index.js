const router = require("express").Router();

router.use(require('./login'));
router.use(require('./main'));
router.use(require('./tests'));
router.use(require('./cuestionarios'));

module.exports = router;