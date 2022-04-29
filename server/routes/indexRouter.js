const router = require('express').Router();
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const taskRouter = require('./taskRouter');
const sessionRouter = require('./sessionRouter');

router.use('/registration', registrationRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/task', taskRouter);
router.use('/session', sessionRouter);

module.exports = router;
