const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middleware/auth");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Google OAuth2 login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth2 callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  usersController.googleAuthCallback
);

// Get user profile
router.get("/me", auth, usersController.getProfile);

module.exports = router;
