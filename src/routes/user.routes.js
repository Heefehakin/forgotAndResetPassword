const express = require('express');
const { signup, login, forgotPassword, resetPassword, verifyOtp } = require('../controllers/user.controller');
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.put('/otp', verifyOtp)



module.exports = router;