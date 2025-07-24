const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Google OAuth2 callback
exports.googleAuthCallback = async (req, res, next) => {
  try {
    console.log("Google OAuth2 callback");
    console.log("req.user:", req.user.toString());
    const { _id, username, email, googleId } = req.user;
    if (!email) {
      return res
        .status(400)
        .json({ message: "No email found in Google profile." });
    }
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        username: username,
        email: email,
        googleId: googleId,
      });
      await user.save();
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const frontendUrl = "http://localhost:3000/google/callback";
    res.redirect(`${frontendUrl}?token=${token}`);
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    next(err);
  }
};
