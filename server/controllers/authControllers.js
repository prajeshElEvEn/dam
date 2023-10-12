const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const {
  error,
  generateToken,
  generateResetToken,
  sendResetEmail,
  validateResetToken,
} = require("../utils");

const handleError = (err, res) => {
  error(err);
  res.status(500).json({ message: err.message });
};

const createTokenAndRespond = (user, res, status, idKey = "id") => {
  const token = generateToken(user._id);
  if (!token) {
    return handleError(new Error("Token generation failed"), res);
  }
  req.session.user = user;
  res.status(status).json({ [idKey]: user._id, token });
};

// @desc    register user
// @route   POST /api/auth/register
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return handleError(new Error("Please fill in all the fields"), res);
  }

  if (await User.findOne({ email })) {
    return handleError(new Error("User already exists!"), res);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (!user) {
    return handleError(new Error("Registration failed"), res);
  }

  createTokenAndRespond(user, res, 201);
});

// @desc    login user
// @route   POST /api/auth/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return handleError(new Error("Please fill in all the fields"), res);
  }

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return handleError(new Error("Invalid credentials"), res);
  }

  createTokenAndRespond(user, res, 200);
});

// @desc    reset password
// @route   POST /api/auth/reset
// @access  public
const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return handleError(new Error("Please fill in all the fields"), res);
  }

  const user = await User.findOne({ email });

  if (!user) {
    return handleError(new Error("User not found"), res);
  }

  const resetToken = generateResetToken();

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000;

  await user.save();

  await sendResetEmail(user.email, resetToken);

  res.status(200).json({ message: "Password reset email sent" });
});

// @desc    confirm reset password
// @route   POST /api/auth/reset/:token
// @access  public
const confirmResetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  if (!token || !newPassword) {
    return handleError(new Error("Please fill in all the fields"), res);
  }

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user || !validateResetToken(token, user)) {
    return handleError(new Error("Invalid or expired token"), res);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ message: "Password reset successful" });
});

module.exports = {
  registerUser,
  loginUser,
  resetPassword,
  confirmResetPassword,
};
