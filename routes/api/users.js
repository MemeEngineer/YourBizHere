const express = require('express')
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')
const router = express.Router()

//POST
router.post('/', usersCtrl.create)

router.post('/login', usersCtrl.login)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)


module.exports = router