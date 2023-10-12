const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { error, success } = require("..");
const {
  EMAIL_SERVICE,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SECURE,
  EMAIL_USER,
  EMAIL_PASS,
  FROM_NAME,
  FROM_EMAIL,
  JWT_SECRET,
  JWT_EXPIRY,
} = process.env;

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE === "true",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const generateToken = (id) =>
  jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });

const generateResetToken = () => crypto.randomBytes(20).toString("hex");

const sendResetEmail = async (email, resetToken) => {
  const mailOptions = {
    from: { name: FROM_NAME, email: FROM_EMAIL },
    to: email,
    subject: "Password Reset Request",
    html: `<p>Hey there,</p><p>You requested to change your password.</p><p>Token: ${resetToken} </p><p>Use this token to reset your password.<p/><p>Regards,</p><p>DAM</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    success("Password reset email sent successfully.");
  } catch (err) {
    error("Error sending password reset email:", err);
    throw new Error("Email could not be sent");
  }
};

const validateResetToken = (token, user) =>
  token === user.resetPasswordToken && user.resetPasswordExpires > Date.now();

module.exports = {
  generateToken,
  generateResetToken,
  sendResetEmail,
  validateResetToken,
};