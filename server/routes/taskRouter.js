const router = require('express').Router();
const { taskGet, taskFilter } = require('../controllers/taskController');

router.route('/')
  .get(taskGet)
  .post(taskFilter);

module.exports = router;
