const router = require('express').Router();
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const taskRouter = require('./taskRouter');

router.use('/registration', registrationRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/task', taskRouter);

module.exports = router;
