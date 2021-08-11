const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/register', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  var string = JSON.stringify(user.name);
  var string2 = JSON.stringify(user.username);
  var string3 = JSON.stringify(user.password);
  res.render('index', { user: string.replace(/"/gi, ""),userName: string2.replace(/"/gi, ""),pass: string3.replace(/"/gi, "") , message: 'Register success' })
})
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({
    username,
    password
  })
  
  if (user) {
    var string = JSON.stringify(user.name);
    string.replace(/"/gi, "")
    console.log(string)
    return res.render('index', { user: string , message: 'Welcome to website' })
    
  } else {
    return res.render('login', { message: 'Email or Password incorrect' })
  }
})
module.exports = router