const express = require('express')
const router = express.Router()
const {registerUser, loginUser, userAccount}= require('../controllers/userControllers')
const {protect}= require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user-account', protect, userAccount)

module.exports = router