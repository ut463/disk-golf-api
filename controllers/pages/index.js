const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const bag = require('./bag-page');
const disc = require('./disc-page');
const login = require('./login-page');

router.use('/bag', withAuth, bag);

router.use('/disc', withAuth, disc);

router.use('/login', login);

router.get('/', (req, res) => {
  return res.render('welcome', {
    logged_in: req.session.logged_in
  });
});

router.get('*', (req, res) => {
  return res.render('404', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;