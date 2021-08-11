const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('../views/login')
})
router.get('/register', (req, res) => {
  res.render('../views/register')
})

module.exports = router