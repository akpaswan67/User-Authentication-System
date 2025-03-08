const express = require("express");
const { register, login, verifyEmail, resetPasswordRequest, resetPassword } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.get("/verify-email/:token", verifyEmail);
router.post("/login", login);
router.post("/reset-password-request", resetPasswordRequest);
router.post("/reset-password", resetPassword);

module.exports = router;
