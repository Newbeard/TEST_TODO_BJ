const router = require('express').Router();
const {
  taskGet,
  taskPage,
  taskApproved,
  taskFilter,
  taskNew,
  taskComplet,
} = require('../controllers/taskController');

router.route('/')
  .get(taskGet)
  .post(taskFilter)
  .put(taskApproved)
  .delete(taskComplet);
router.route('/page')
  .post(taskPage);
router.route('/new')
  .post(taskNew);
router.route('/complet')
  .post(taskComplet);

module.exports = router;
