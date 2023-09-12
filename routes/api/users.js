const express = require('express')
const usersCtrl = require('../../controllers/api/users')

const router = express.Router()

//POST
router.post('/', usersCtrl.create)




module.exports = router