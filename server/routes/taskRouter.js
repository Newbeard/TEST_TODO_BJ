const router = require('express').Router();
const {
  taskGet,
  taskPage,
  taskFilter,
} = require('../controllers/taskController');

router.route('/')
  .get(taskGet)
  .post(taskFilter);
router.route('/page')
  .post(taskPage);
module.exports = router;
