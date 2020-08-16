const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('index');
});




router.get('/contacto', async (req, res) => {
  res.render('contact');
});

router.get('/about', async (req, res) => {
  res.render('about');
});


module.exports = router;
